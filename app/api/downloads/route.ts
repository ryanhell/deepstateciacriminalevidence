import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file specified" }, { status: 400 });
  }

  // Replace with your actual VPS2 Internal/External IP
  const VPS2_URL = `http://YOUR_VPS2_IP_HERE/${file}`;

  try {
    const response = await fetch(VPS2_URL);

    if (!response.ok) throw new Error("File not found on Vault");

    const data = await response.arrayBuffer();

    return new NextResponse(data, {
      headers: {
        "Content-Disposition": `attachment; filename="${file}"`,
        "Content-Type": "application/octet-stream",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "File retrieval failed" },
      { status: 404 }
    );
  }
}
