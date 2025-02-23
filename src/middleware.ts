import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/api/auth")) {
        return NextResponse.next();
    }
    
    if (!token) {
        const signInURL = new URL(`/signin`, req.nextUrl.origin);
        return NextResponse.redirect(signInURL.href);
    }

    return NextResponse.next();
}
