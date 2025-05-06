import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx', 'js', 'jsx'],
  transpilePackages: ['next-mdx-remote'],
});

export default nextConfig;
