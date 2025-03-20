// import { NextRequestWithAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // const session = await getToken({ req: request });
  const jwt = req.cookies.get("next-auth.session-token");
  const url = req.url;

  const isAuthPath = req.nextUrl.pathname.startsWith("/auth");
  const isHomePath = req.nextUrl.pathname.endsWith("/");

  if (isHomePath) {
    return NextResponse.next();
  }

  if (!jwt && !isAuthPath) {
    return NextResponse.redirect(new URL("/auth/login", url));
  }

  if (jwt && isAuthPath) {
    return NextResponse.redirect(new URL("/dashboard", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
