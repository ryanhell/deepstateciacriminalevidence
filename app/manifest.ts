import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ryanhellfacts.com",
    short_name: "Ryan Hell Facts",
    description:
      "Kidnapped, assaulted, and denied civil rights by state and federal actors in Chelan County, Washington State. Exposing the corruption and crimes committed by Rivercom 911, Wenatchee Valley Fire, Chelan County Sheriff's Department, Chelan County Superior Court, Judge Jordan, and Chelan County Public Defenders Association, including Sally Bagshaw.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
  name: "ryanhellfacts.com";
}
