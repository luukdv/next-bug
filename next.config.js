module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/pages/test/",
          destination: "https://example.com/",
        },
      ],
    };
  },
  trailingSlash: true,
};
