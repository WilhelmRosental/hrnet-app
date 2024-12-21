/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["hrnet-datatable-styled"],
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
