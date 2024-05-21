/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    basePath: "/stories10x/captura",
};

export default nextConfig;
