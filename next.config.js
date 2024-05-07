/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
 "build": "next build",
 "start": "next start",
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
};

module.exports = nextConfig;
