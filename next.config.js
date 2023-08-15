/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['img.youtube.com'], // Add the hostname of external image sources

    remotePatterns: [{
      protocol: 'https',
      hostname: 'source.unsplash.com',
      port: '',
      pathname: '/random',
    }, ],
  },
};

module.exports = nextConfig;