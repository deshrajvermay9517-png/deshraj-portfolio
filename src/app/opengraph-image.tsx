import { ImageResponse } from "next/og";

export const alt = "Deshraj Verma — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#020617",
          padding: "72px",
          color: "white"
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#5eead4",
            fontWeight: 700,
            letterSpacing: 2
          }}
        >
          DESHRAJ VERMA
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 980,
            marginTop: 24,
            fontSize: 72,
            lineHeight: 1.05,
            fontWeight: 800
          }}
        >
          Full Stack Developer building real-world software products.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#cbd5e1"
          }}
        >
          React · Next.js · Node.js · TypeScript · PostgreSQL · Supabase · AI Integrations
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 72,
            bottom: 60,
            width: 86,
            height: 86,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            background: "#0f766e",
            fontSize: 34,
            fontWeight: 800
          }}
        >
          DV
        </div>
      </div>
    ),
    size
  );
}
