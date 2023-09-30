import NextAuth from "next-auth";
import { authOptions } from "@/lib/NextAuthConfig";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
