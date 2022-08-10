/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

module.exports = withPWA({
  distDir: "./build",
  pwa: {
    dest: "public",
    register: true,
  },
  reactStrictMode: true,
});
