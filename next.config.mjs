/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '/**',
                port:'',
            }
        ]
    }
};

export default nextConfig;


