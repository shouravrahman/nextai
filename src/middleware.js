import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
// This function can be marked `async` if using `await` inside
export async function middleware(req) {
	const { pathname, origin } = req.nextUrl;

	const session = await getToken({
		req,
		secret: process.env.NEXTAUTH_SECRET,
		secureCookie: process.env.NODE_ENV === "production",
	});

	if (pathname == "/") {
		if (!session)
			return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth`);
	}
	if (pathname == "/auth") {
		if (session) return NextResponse.redirect(`${origin}`);
	}
	if (pathname.startsWith("/admin")) {
		if (session) return NextResponse.redirect(`${origin}`);
		if (session.role == "admin") return NextResponse.redirect(`${origin}`);
	}
}

// // See "Matching Paths" below to learn more
// export const config = {
// 	matcher: "/about/:path*",
// };
