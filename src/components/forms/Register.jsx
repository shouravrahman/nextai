"use client";

import Input from "../inputs/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import validator from "validator";
import { FiLock, FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { useEffect, useState } from "react";
import zxcvbn from "zxcvbn";
import SubmitButton from "../Buttons/SubmitButton";
import { toast } from "react-toastify";
import axios from "axios";
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
		phone: z.string().refine(validator.isMobilePhone, {
			message: "Please enter a valid phone number",
		}),

		password: z
			.string()
			.min(6, "Password must be atleast 6 charecters")
			.max(32, "Passowrd must be less than 32 charecters"),
		confirmPassword: z.string(),
		accept: z.literal(true, {
			errorMap: () => ({
				message: "Please accept terms & conditions before continuing.",
			}),
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

const Register = () => {
	const [passwordScore, setPasswordScore] = useState(0);
	//!whats the difference if state is outside the function?

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

	useEffect(() => {
		setPasswordScore(validatePassowrdStrength());
	}, [watch().password]);

	const onSubmit = async (values) => {
		try {
			const { data } = await axios.post(
				"/api/auth/signup",
				JSON.stringify({ ...values })
			);
			console.log(data);

			toast.success(data.message);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='my-4 text-sm'>
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

			<div className='flex items-center mt-3'>
				<input
					type='checkbox'
					name='accept'
					id='accept'
					className='mr-2 focus:ring-0 rounded'
					{...register("accept")}
				/>
				<label htmlFor='accept' className='text-[#333333]'>
					I accept the&nbsp;{" "}
					<a
						href=''
						className='text-blue-600 hover:text-blue-700 hover:underline'
						target='_blank'
					>
						terms
					</a>
					&nbsp;and&nbsp;
					<a
						href=''
						className='text-blue-600 hover:text-blue-700 hover:underline'
						target='_blank'
					>
						privacy policy
					</a>
				</label>
			</div>
			<div>
				{errors?.accept && (
					<p className='text-sm text-red-600 mt-1'>{errors?.accept?.message}</p>
				)}
			</div>
			<SubmitButton isSubmitting={isSubmitting} />
		</form>
	);
};

export default Register;
