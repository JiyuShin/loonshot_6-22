import { NextResponse } from "next/server";

/*
  Site-wide password gate (HTTP Basic Auth).

  - The password is read from the SITE_PASSWORD environment variable.
  - Set SITE_PASSWORD in Vercel (Project → Settings → Environment Variables)
    to lock the deployment. Anyone opening the site gets a browser password
    prompt; only the correct password lets them in.
  - If SITE_PASSWORD is NOT set (e.g. local dev), the site stays open.
  - Matches every path, so HTML, JS bundles, and media are all protected.
*/

export const config = {
  matcher: "/:path*",
};

export function middleware(req) {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) return NextResponse.next();

  const header = req.headers.get("authorization");
  if (header) {
    const [scheme, encoded] = header.split(" ");
    if (scheme === "Basic" && encoded) {
      try {
        const decoded = atob(encoded);
        const password = decoded.slice(decoded.indexOf(":") + 1);
        if (password === expected) return NextResponse.next();
      } catch {
        /* malformed header → fall through to 401 */
      }
    }
  }

  return new NextResponse("인증이 필요합니다 · Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="PROJECT LOONSHOT", charset="UTF-8"',
    },
  });
}
