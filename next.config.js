// const runtimeCaching = require("next-pwa/cache")

const withPWA = require("next-pwa");

// module.exports = {
// };

module.exports = withPWA({
    // exclude: true,
    // mode: 'serverless',
    // pwa: {

    dest: 'public',
    register: true,
    skipWaiting: true,
    // swSrc: 'service-worker.js',
    // },
    // runtimeCaching,
    // buildExcludes: [/middleware],
    // : true,
})