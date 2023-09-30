"use client";

import { signIn, signOut } from "next-auth/react";

export const SignInButton = () => {
	return (
		<button
			className='bg-slate-600 hover:bg-slate-400 text-md uppercase font-bold px-8 py-2 rounded-md sm:mr-2 mb-1 ease-linear'
			onClick={() => signIn()}
		>
			SignIn
		</button>
	);
};
export const SignOutButton = () => {
	return (
		<button
			className='bg-slate-600 hover:bg-slate-400 text-md uppercase font-bold px-8 py-2 rounded-md sm:mr-2 mb-1 ease-linear'
			onClick={() => signOut()}
		>
			SignOut
		</button>
	);
};
