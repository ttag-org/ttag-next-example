/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    localeDetection: false,

    locales: ["en-US", "uk"],

    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
