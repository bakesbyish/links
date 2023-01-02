import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // The current URL
  const url = req.nextUrl.clone();

  // Home page
  if (url.pathname === "/") {
    return NextResponse.rewrite("https://bakesbyish.com");
  }

  // Facebook
  if (url.pathname.startsWith("/fb")) {
    return NextResponse.rewrite("https://facebook.com/bakesbyishani");
  }

  // Instagram
  if (url.pathname.startsWith("/ig")) {
    return NextResponse.rewrite("https://instagram.com/bakes_by_ish");
  }

  // Google maps
  if (url.pathname.startsWith("/map")) {
    return NextResponse.rewrite("https://g.page/bakesbyish?share");
  }

  // Web
  if (url.pathname.startsWith("/web")) {
    return NextResponse.rewrite("https://bakesbyish.com");
  }

  // Twitter
  if (url.pathname.startsWith("/twitter")) {
    return NextResponse.rewrite("https://twitter.com/bakesbyish");
  }

  // Whatsapp
  if (url.pathname.startsWith("/whatsapp")) {
    return NextResponse.rewrite("https://wa.me/94717121856");
  }
}

export const config = {
  matcher: ["/", "/fb", "/ig", "/map", "/web", "/whatsapp", "/twitter"],
};
