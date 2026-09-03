import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Deshraj Verma Portfolio",
    short_name: "Deshraj",
    description: "Full Stack Developer portfolio for Deshraj Verma.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#0f766e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
