import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const CONFIG = {
  RATE_LIMIT: { windowMs: 60000, maxRequests: 30 },
  VPS2_URL: "https://files.ryanhellfacts.com/evidence/",
};

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + CONFIG.RATE_LIMIT.windowMs,
    });
    return true;
  }

  if (userLimit.count >= CONFIG.RATE_LIMIT.maxRequests) return false;

  userLimit.count++;
  return true;
}

export async function GET(request: NextRequest) {
  const ip = getClientIp(request);
  const filePath = request.nextUrl.searchParams.get("path");

  if (!filePath) {
    return NextResponse.json({ error: "File path required" }, { status: 400 });
  }

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  if (filePath.includes("..") || !filePath.startsWith("/")) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

  console.log(`✅ Downloads: ${filePath} | IP: ${ip}`);

  return NextResponse.redirect(`${CONFIG.VPS2_URL}${filePath}`);
}
