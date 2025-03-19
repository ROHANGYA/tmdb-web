/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com'
            }, {
                protocol: 'https',
                hostname: 'image.tmdb.org'
            }, {
                protocol: 'https',
                hostname: 'picsum.photos'
            }
        ]

    },
};

export default nextConfig;
