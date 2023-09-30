import { getServerSession } from "next-auth/next";
import { authOptions } from "../lib/auth";
import { SignInButton, SignOutButton } from "../components/Button";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import SocialIcons from "@/components/SocialIcons";

const text =
	"This is a login and registration system built with Next.js and NextAuth.js.";
const text2 =
	"It provides user authentication functionality and allows users to sign up, log in, and log out.";

export default async function Page() {
	const session = await getServerSession(authOptions);
	return (
		<main className='w-full flex min-h-screen items-center flex-col justify-center '>
			<div className='mx-auto'>
				<div className='container border border-white relative flex flex-col w-full rounded-lg p-10'>
					<div className='flex flex-wrap justify-center items-center '>
						<div className='w-full text-right'>
							<div className='py-7 px-3'>
								<div>{session ? <SignOutButton /> : <SignInButton />}</div>
							</div>
						</div>
					</div>
					<div className='w-full flex justify-center'>
						<Image
							className='rounded-full'
							src={session?.user.image}
							width={60}
							height={60}
							alt='user'
						/>
					</div>
					<div className='mt-12 text-center'>
						<h3 className='text-4xl font-semibold mb-2'>
							{session?.user?.name}
						</h3>
						<div className='text-sm mb-2 font-bold'>{session?.user?.email}</div>
						<div className='text-sm mb-2 font-bold'>
							You logged in using &nbsp;
							<span className='capitalize bg-blue-400 text-white px-4 py-1 ml-2 font-bold italic text-lg rounded-md'>
								{session?.user?.provider}
							</span>
						</div>
					</div>
					<div className='mt-10 py-10 border-t text-center'>
						<div className='flex flex-wrap justify-center'>
							<div className='w-full px-4'>
								<p className='mb-4 text-sm'>{text}</p>
								<p className='font-bold text-xs'>{text2}</p>
								<div className='mt-6 flex items-center justify-center gap-2'>
									Source code &nbsp;
									<a
										href='http://'
										target='_blank'
										className='text-4xl'
										rel='noopener noreferrer'
									>
										<AiFillGithub />
									</a>
								</div>
								<SocialIcons />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
