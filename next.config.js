/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 't.resfu.com',
				port: '',
				pathname: '/*/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn.resfu.com',
				// port: '',
				// pathname: '/*/**',
			},
		],
	},
};

module.exports = nextConfig;
