import { muxClient } from "@/lib/mux";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const upload = await muxClient.video.uploads.create({
      new_asset_settings: {
        playback_policies: ["public"], // ✅ Use array instead of string
      },
      cors_origin: "*",
    });

    return NextResponse.json({
      uploadUrl: upload.url,
      uploadId: upload.id,
    });
  } catch (error) {
    console.error("Mux upload creation failed:", error);
    return NextResponse.json(
      { error: "Upload creation failed", details: String(error) },
      { status: 500 }
    );
  }
}