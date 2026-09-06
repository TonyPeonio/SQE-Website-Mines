/**
 * Ensures static assets resolve under GitHub Pages basePath
 * (e.g. /SQE-Website-Mines/...). Local/dev builds use "".
 */
export default function imageLoader({ src }) {
	const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
	if (/^https?:\/\//.test(src) || (base && src.startsWith(base))) {
		return src;
	}
	return `${base}${src.startsWith("/") ? src : `/${src}`}`;
}
