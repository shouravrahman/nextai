import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	image: {
		type: String,
		default: "https://avatars.githubusercontent.com/u/73746355?v=4",
	},
	password: {
		type: String,
		required: true,
		minLength: 6,
	},
	email_verified: {
		type: Boolean,
		default: false,
	},
	phone: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		default: "user",
	},
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
