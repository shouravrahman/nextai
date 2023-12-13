import Background from "@/components/background/Background";
import Register from "@/components/forms/Register";
import Image from "next/image";

const page = () => {
	return (
		<div className='w-full flex items-center justify-center'>
			<div className='w-full h-screen flex items-center justify-center '>
				{/* Form */}
				<div className='w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-[43%] 2xl:w-1/3 flex items-center justify-center '>
					<div className='w-full mt-6 px-10 py-3'>
						<h2 className='text-center text-2xl font-bold tracking-wide text-red-500'>
							Sign up
						</h2>
						<p className='text-center text-sm text-red-400 mt-2'>
							You already have an account ? &nbsp;
							<a className='text-blue-700 hover:text-blue-700 hover:underline cursor-pointer'>
								Sign in
							</a>
						</p>
						{/* sign up form */}
						<Register />
					</div>
				</div>

				{/* Background */}
				<Background image='/images/spider.png' />
				{/* <Image src='/images/dna.png' width={100} height={100} /> */}
			</div>
		</div>
	);
};

export default page;
