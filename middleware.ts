import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
  const isRegisterPage = request.nextUrl.pathname === "/auth/register";

  // if (!token && !isAuthPage && !isRegisterPage) {
  //   return NextResponse.redirect(new URL('/auth', request.url));
  // }

  // if (token && (isAuthPage || isRegisterPage)) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
