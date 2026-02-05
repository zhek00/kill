import type { NextConfig } from "next";
import path from "node:path";



const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
        ],
    },

    typescript: {
        ignoreBuildErrors: true,
    },

    turbopack: {
        // rules: { ... } // Removed visual-edits loader
    }
};

export default nextConfig;
