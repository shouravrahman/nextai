import User from "@/models/user";
import connectDb from "../../../../utils/connectDb";
import validator from "validator";
import bcrypt from "bcryptjs";

export async function POST(req) {
	await connectDb();
	try {
		const { first_name, last_name, email, phone, password } = await req.json();

		if (!first_name || !last_name || !email || !phone || !password) {
			return Response.json(
				{
					message: "please fill in all the fields",
				},
				{ status: 400 }
			);
		}
		if (!validator.isEmail(email)) {
			return Response.json(
				{
					message: "Please Add a valid email ",
				},
				{ status: 400 }
			);
		}
		if (!validator.isMobilePhone(phone)) {
			return Response.json(
				{
					message: "Please Add a valid mobile number",
				},
				{ status: 400 }
			);
		}

		const user = await User.findOne({ email: email });

		if (user) {
			return Response.json(
				{
					message: "This email already exists",
				},
				{ status: 400 }
			);
		}

		if (password.length < 6) {
			return Response.json(
				{
					message: "Password must be at least 6 charecters",
				},
				{ status: 400 }
			);
		}

		const cryptedPassword = await bcrypt.hash(password, 12);

		const newUser = new User({
			name: `${first_name + " "}${last_name}`,
			email,
			phone,
			password: cryptedPassword,
		});
		await newUser.save();

		return Response.json({
			message: "Register Success! Please activate your account to start using",
		});
	} catch (error) {
		return Response.json({ message: error.message }, { status: 500 });
	}
}
