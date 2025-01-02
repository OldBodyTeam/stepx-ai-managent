import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-hello-from-middleware1", "hello");
}
export const config = {
  matcher: ["/login"],
};
