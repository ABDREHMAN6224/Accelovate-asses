import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/","/*"];

export async function middleware(req:NextRequest) {
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
    })

    const {pathname} = req.nextUrl;
    // if (
    //     pathname.startsWith("/signin") || // Public sign-in page
    //     pathname.startsWith("/api/auth") // Allow NextAuth API routes
    //   ) {
    //     return NextResponse.next();
    //   }

    //   if(!token && protectedPaths.some(path => pathname.startsWith(path))){       
    //         const signInURl = new URL("/signin", req.nextUrl.origin);
    //         return NextResponse.redirect(signInURl.href);
    //   }
        return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], 
  };