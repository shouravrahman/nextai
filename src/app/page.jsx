import { getServerSession } from "next-auth/next";
import { authOptions } from "../lib/auth";
import { SignInButton, SignOutButton } from "../components/Button";
import Image from "next/image";

export default async function Page() {
	const session = await getServerSession(authOptions);
	return (
		<main className='flex min-h-[100vh] items-center flex-col justify-center '>
			<h1 className='bg-white text-black'>{session?.user.name}</h1>
			<Image
				className='rounded-full'
				src={session?.user.image}
				width={100}
				height={100}
				alt='user'
			/>
			<h1 className='bg-white text-black'>{session?.user.email}</h1>
			<div>{session ? <SignOutButton /> : <SignInButton />}</div>
		</main>
	);
}
