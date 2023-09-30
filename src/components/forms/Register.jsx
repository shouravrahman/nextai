"use client";

import Input from "../inputs/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiLock, FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { useEffect, useState } from "react";
import zxcvbn from "zxcvbn";
const formSchema = z
	.object({
		first_name: z
			.string()
			.min(2, "First name must be atleast 2 charecters")
			.max(32, "First name must be less than 32 charecters")
			.regex(new RegExp("^[a-zA-Z]+$"), "No special charecters allowed"),
		last_name: z
			.string()
			.min(2, "Last name must be atleast 2 charecters")
			.max(32, "Last name must be less than 32 charecters")
			.regex(new RegExp("^[a-zA-Z]+$"), "No special charecters allowed"),

		email: z.string().email("Please use a valid email"),
		phone: z.string().regex(
			new RegExp(
				"^\\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$" // can use validator isMobile function here
			),
			"Please enter a valid phone number"
		),
		password: z
			.string()
			.min(6, "Password must be atleast 6 charecters")
			.max(32, "Passowrd must be less than 32 charecters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

const Register = () => {
	const [passwordScore, setPasswordScore] = useState(0);
	// TODO: whats the difference if state is outside the function?

	const validatePassowrdStrength = () => {
		let password = watch().password;

		return zxcvbn(password ? password : "").score;
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data) => console.log(data);

	useEffect(() => {
		setPasswordScore(validatePassowrdStrength());
	}, [watch().password]);
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='my-8 text-sm'>
			<div className='gap-2 md:flex'>
				<Input
					name='first_name'
					label='First name'
					type='text'
					icon={<CiUser />}
					placeholder='example'
					register={register}
					error={errors?.first_name?.message}
					disabled={isSubmitting}
				/>
				<Input
					name='last_name'
					label='Last name'
					type='text'
					icon={<CiUser />}
					placeholder='example'
					register={register}
					error={errors?.last_name?.message}
					disabled={isSubmitting}
				/>
			</div>
			<Input
				name='email'
				label='Email address'
				type='text' // no need to specify email type because of custom email validation
				icon={<FiMail />}
				placeholder='example@example.com'
				register={register}
				error={errors?.email?.message}
				disabled={isSubmitting}
			/>
			<Input
				name='phone'
				label='Phone number'
				type='text' // no need to specify email type because of custom email validation
				icon={<BsTelephone />}
				placeholder='+(xxx) xxx-xxx-xxx'
				register={register}
				error={errors?.phone?.message}
				disabled={isSubmitting}
			/>
			<Input
				name='password'
				label='Password'
				type='password'
				icon={<FiLock />}
				placeholder='*************'
				register={register}
				error={errors?.password?.message}
				disabled={isSubmitting}
			/>

			{watch().password?.length > 0 && (
				<div className='flex mt-2'>
					{Array.from(Array(5).keys()).map((span, i) => (
						<span className='w-1/5 px-1' key={i}>
							<div
								className={`h-2 rounded-xl ${
									passwordScore <= 2
										? "bg-red-600"
										: passwordScore < 4
										? "bg-blue-600"
										: "bg-green-600"
								}`}
							></div>
						</span>
					))}
				</div>
			)}
			<Input
				name='confirmPassword'
				label='Confirm password'
				type='password'
				icon={<FiLock />}
				placeholder='*************'
				register={register}
				error={errors?.confirmPassword?.message}
				disabled={isSubmitting}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default Register;
