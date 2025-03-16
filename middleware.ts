import { getToken } from "next-auth/jwt";
import { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequestWithAuth) {
  const session = await getToken({ req: request });

  const isAuthPath = request.nextUrl.pathname.startsWith("/auth");
  const isHomePath = request.nextUrl.pathname.startsWith("/");

  if (isHomePath) {
    return NextResponse.next();
  }

  if (!session && !isAuthPath) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (session && isAuthPath) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
