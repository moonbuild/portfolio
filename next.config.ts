import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // After Much delibration, im changing the plan from SSR -> SSG
  output:'export', // this command creates a /out folder that is used in cloudfare
  images:{
    unoptimized:true,
  },
  reactCompiler: true,
};

export default nextConfig;
