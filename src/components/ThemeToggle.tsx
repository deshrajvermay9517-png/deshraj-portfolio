"use client";
import { useEffect, useState } from "react";
export function ThemeToggle(){
  const [dark,setDark]=useState(false);
  useEffect(()=>{const saved=localStorage.getItem("theme");const initial=saved?saved==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;setDark(initial);document.documentElement.classList.toggle("dark",initial)},[]);
  function toggle(){const next=!dark;setDark(next);document.documentElement.classList.toggle("dark",next);localStorage.setItem("theme",next?"dark":"light")}
  return <button type="button" onClick={toggle} aria-label="Toggle theme" className="rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-sm font-semibold dark:border-slate-700 dark:bg-slate-900/80">{dark?"☀ Light":"☾ Dark"}</button>
}
