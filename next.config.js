/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: '/products',
                destination: '/products',
            },
            {
                source: '/categories',
                destination: '/categories',
            },
        ];
    },
};
