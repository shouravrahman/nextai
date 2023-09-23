/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: { appDir: true },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
			{
				protocol: "https",
				hostname: "cdn.discordapp.com",
			},
		],
	},
};

module.exports = nextConfig;
