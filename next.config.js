/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "jthcgmqhewwivuatycwu.supabase.co",
			},
		],
	},
};

module.exports = nextConfig;
