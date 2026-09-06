/** Prefix absolute site paths with the GitHub Pages basePath when set. */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path || /^https?:\/\//.test(path) || !path.startsWith("/")) {
    return path;
  }
  if (base && path.startsWith(base + "/")) {
    return path;
  }
  return `${base}${path}`;
}
