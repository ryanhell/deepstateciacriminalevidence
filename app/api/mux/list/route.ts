// app/api/mux/list/route.ts
import { NextResponse } from "next/server";
import { muxClient } from "@/lib/mux";

export async function GET() {
  try {
    const assets = await muxClient.video.assets.list();
    return NextResponse.json(assets);
  } catch (error: any) {
    console.error("Mux fetch error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
