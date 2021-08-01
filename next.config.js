module.exports = {
  reactStrictMode: true,
  webpack5: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
};
