import Register from "@/components/forms/Register";

const page = () => {
	return (
		<div className='w-full flex items-center justify-center'>
			<div className='w-full h-100 flex items-center justify-center'>
				<div className='w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/3 h-full bg-whiteflex items-center justify-center '>
					<div className='w-full px-12 py-4'>
						<h2 className='text-center text-2xl font-bold tracking-wide text-orange-600'>
							Sign up
						</h2>
						<p className='text-center text-sm text-orange-800 mt-2'>
							You already have an account ? &nbsp;
							<a className='text-blue-600 hover:text-blue-700 hover:underline cursor-pointer'>
								Sign in
							</a>
						</p>
						{/* sign up form */}
						<Register />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
