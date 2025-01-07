import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export default async function middleware() {
  const cookie = (await cookies()).get("token")?.value;
  console.log("cookie -->", cookie);
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
