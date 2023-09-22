"use client";

import { signIn, signOut } from "next-auth/react";

export const SignInButton = () => {
	return (
		<button
			className='bg-slate-600 p-2 rounded-md m-2'
			onClick={() => signIn()}
		>
			SignIn
		</button>
	);
};
export const SignOutButton = () => {
	return (
		<button
			className='bg-slate-600 p-2 rounded-md m-2'
			onClick={() => signOut()}
		>
			SignOut
		</button>
	);
};
