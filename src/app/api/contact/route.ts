import { NextRequest, NextResponse } from "next/server";
const allowed=new Set(["Full-time Opportunity","Freelance Project","Collaboration","General Inquiry"]);
const buckets=new Map<string,{count:number;reset:number}>();
function clean(v:unknown,max:number){return typeof v==="string"?v.trim().slice(0,max):""}
function emailOK(v:string){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)}
function limited(ip:string){const now=Date.now();const b=buckets.get(ip);if(!b||b.reset<now){buckets.set(ip,{count:1,reset:now+600000});return false}b.count++;return b.count>3}
export async function POST(req:NextRequest){
  const ip=req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
  if(limited(ip))return NextResponse.json({error:"Too many messages. Try again later."},{status:429});
  let body:Record<string,unknown>;try{body=await req.json()}catch{return NextResponse.json({error:"Invalid request."},{status:400})}
  if(clean(body.company,200))return NextResponse.json({ok:true});
  const name=clean(body.name,80), email=clean(body.email,160), type=clean(body.type,60), message=clean(body.message,2000);
  if(name.length<2||!emailOK(email)||message.length<10||!allowed.has(type))return NextResponse.json({error:"Please check the form fields."},{status:400});
  const key=process.env.RESEND_API_KEY, from=process.env.CONTACT_FROM_EMAIL, to=process.env.CONTACT_TO_EMAIL||"deshrajvermay9517@gmail.com";
  if(!key||!from)return NextResponse.json({error:"Contact form email delivery is not configured yet. Please use the direct email link."},{status:503});
  const sent=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:email,subject:`Portfolio: ${type} from ${name}`,text:`Name: ${name}\nEmail: ${email}\nType: ${type}\n\n${message}`})});
  if(!sent.ok)return NextResponse.json({error:"Email service could not send your message."},{status:502});
  return NextResponse.json({ok:true});
}
