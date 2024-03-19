// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


import { resolve } from 'path';

export function webpack(config) {
    config.resolve.alias['~'] = resolve( 'src/pages');
    return config;
}
