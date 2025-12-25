import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const muxSigningSecret = process.env.MUX_SIGNING_SECRET!;

export async function POST(req: NextRequest) {
  try {
    // await connectToDB();

    const signatureHeader = req.headers.get("mux-signature");
    if (!signatureHeader) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    const [timestampPart, signaturePart] = signatureHeader.split(",");
    const timestamp = timestampPart.replace("t=", "");
    const receivedSignature = signaturePart.replace("v1=", "");

    const rawBody = await req.text(); // ✨ Accurate raw body
    const payload = `${timestamp}.${rawBody}`;

    const expectedSignature = crypto
      .createHmac("sha256", muxSigningSecret)
      .update(payload)
      .digest("hex");

    if (expectedSignature !== receivedSignature) {
      console.warn("Signature mismatch");
      console.log("Expected:", expectedSignature);
      console.log("Received:", receivedSignature);
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    const muxEvent = JSON.parse(rawBody);
    const asset = muxEvent.data;

    if (muxEvent.type !== "video.asset.ready") {
      return NextResponse.json({ message: "No actionable event." });
    }
    alert("Video uploaded successfully!");
    return NextResponse.json({
      message: "Video uploaded successfully!",
    });
  } catch (error: any) {
    console.error("Mux webhook error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
