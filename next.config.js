const baseDomain = ".maggieliu.dev";
const paths = [
  {
    subdomain: "gh",
    destination: "https://github.com/maggie-j-liu",
  },
  {
    subdomain: "github",
    destination: "https://github.com/maggie-j-liu",
  },
  {
    subdomain: "posts",
    destination: "https://maggieliu.dev/posts",
  },
];

module.exports = {
  async redirects() {
    return paths.map((path) => ({
      source: "/:path*",
      has: [
        {
          type: "host",
          value: path.subdomain + baseDomain,
        },
      ],
      destination: path.destination + "/:path",
      permanent: false,
    }));
  },
  reactStrictMode: true,
};
