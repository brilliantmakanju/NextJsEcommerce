
const withPWA = require("next-pwa");

// module.exports = {
// };

module.exports = withPWA({
    // exclude: true,
    // mode: 'serverless',
    dest: "public",
    register: true,
    skipWaiting: true,
})