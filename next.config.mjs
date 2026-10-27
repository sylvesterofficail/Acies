/** Static export for GitHub Pages. BASE_PATH is set by the deploy workflow
 *  (e.g. "/Acies" for sylvesterofficail.github.io/Acies). Empty for a custom domain. */
const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
