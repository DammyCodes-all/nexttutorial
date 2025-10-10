import { NextResponse, NextRequest, MiddlewareConfig } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/api/jokes", req.url));
}

export const config: MiddlewareConfig = {
  matcher: "/api",
};
