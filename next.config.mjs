/** @type {import('next').NextConfig} */
const nextConfig={
  reactStrictMode:true,
  poweredByHeader:false,
  trailingSlash:true,
  compress:true,
  output:'export',
  images:{unoptimized:true}
};

export default nextConfig;
