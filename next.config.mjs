/** @type {import('next').NextConfig} */

// GitHub Pages serves this repo at /SQE-Website-Mines (not the domain root).
// Local `next dev` / `next start` leave basePath empty.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "SQE-Website-Mines";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx"],
	output: "export",
	trailingSlash: true,
	images: {
		loader: "custom",
		loaderFile: "./imageLoader.js",
	},
	basePath,
	assetPrefix: basePath || undefined,
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
};

export default nextConfig;
