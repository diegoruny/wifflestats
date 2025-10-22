/** @type {import('next').NextConfig} */
const nextConfig = {
	/* Modern Next.js 15 configuration */
	reactStrictMode: true,

	// Performance optimizations
	poweredByHeader: false,
	eslint: {
		ignoreDuringBuilds: true,
	},

	// Experimental features for Next.js 15
	experimental: {
		optimizePackageImports: [
			"@radix-ui/react-icons",
			"lucide-react",
			"@tanstack/react-query",
			"@tanstack/react-table"
		],
	},

	// Turbopack configuration
	turbopack: {
		rules: {
			"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.js",
			},
		},
	},

	// Development experience
	devIndicators: {
		position: "bottom-right",
	},

	// Image optimization
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		formats: ['image/webp', 'image/avif'],
	},

	// Security headers
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
				],
			},
		]
	},
}

export default nextConfig
