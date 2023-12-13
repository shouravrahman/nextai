"use client";
import { useState } from "react";
import { IoAlertCircle } from "react-icons/io5";
import { ImEye, ImEyeBlocked } from "react-icons/im";
const Input = ({
	name,
	label,
	type,
	icon,
	placeholder,
	register,
	error,
	disabled,
}) => {
	const [showPassword, setShowPasword] = useState(false);
	return (
		<div className='mt-3 w-[100%]'>
			<label htmlFor={name} className='text-red-700'>
				{label}
			</label>
			<div className='relative mt-1 roudned-md '>
				<div
					className='absolute pointer-events-none left-0 top-0.5 inset-y-0 flex items-center pl-3'
					style={{ transform: `${error ? "translateY(-15px)" : ""}` }}
				>
					<span className='text-orange-900 text-sm'>{icon}</span>
				</div>

				<input
					type={showPassword ? "text" : type}
					className='text-black w-full py-2 pr-7 pl-8 block rounded-md border border-orange-900 outline-offset-2 outline-transparent focus:border-orange-300 focus:ring-red-600 text-sm'
					placeholder={placeholder}
					{...register(name)}
					// can be done with cn
					style={{
						borderColor: `${error ? "#ED4337" : ""}`,
					}}
				/>
				{/* show and hide password */}
				{(name === "password" || name === "confirmPassword") && (
					<div
						className='absolute top-2.5 right-2 text-xl text-gray-700 cursor-pointer'
						onClick={() => setShowPasword((prev) => !prev)}
						style={{ right: `${error ? "2rem" : ""}` }}
					>
						{showPassword ? <ImEye /> : <ImEyeBlocked />}
					</div>
				)}
				{error && (
					<div className='fill-red-500 absolute right-2 top-2.5 text-xl'>
						<IoAlertCircle fill='#ED4337' />
					</div>
				)}
				{error && <p className='text-sm text-[#ED4337] mt-1'>{error}</p>}
			</div>
		</div>
	);
};

export default Input;
