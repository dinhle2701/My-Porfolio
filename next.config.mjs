/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/My-Porfolio',
  images: {
    domains:
      ['img.freepik.com',
        'externlabs.com',
        'kinsta.com',
        'images.viblo.asia',
        'i0.wp.com',
        'images-cdn.openxcell.com',
        'upload.wikimedia.org',
        'z-m-static.xx.fbcdn.net',
        'cdn.tgdd.vn',
        'png.pngtree.com',
        'foxfio.com'
      ]
  }
};

export default nextConfig;
