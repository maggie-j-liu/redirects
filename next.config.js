const baseDomain = ".maggieliu.dev";
module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "gh" + baseDomain,
          },
        ],
        destination: "https://github.com/maggie-j-liu/:path*",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "github" + baseDomain,
          },
        ],
        destination: "https://github.com/maggie-j-liu/:path*",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "website" + baseDomain,
          },
        ],
        destination: "https://maggieliu.dev/:path*",
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
};
