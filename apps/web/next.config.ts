import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	reactCompiler: true,
	transpilePackages: ["@blog/env", "@blog/db"],
	poweredByHeader: false,
	logging:
		process.env.NODE_ENV === "development"
			? {
					fetches: { fullUrl: true, hmrRefreshes: true },
				}
			: false,
};

export default nextConfig;
