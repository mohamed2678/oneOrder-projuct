// Import the defineConfig function from @vue/cli-service
const { defineConfig } = require("@vue/cli-service");

// Import NodePolyfillPlugin to provide polyfills for Node.js core modules
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

// Export the Vue CLI configuration
module.exports = defineConfig({
  // Set the base URL for the application
  publicPath: "/",

  // Transpile dependencies to ensure compatibility with older browsers
  transpileDependencies: true,

  // Configure Webpack settings
  configureWebpack: {
    // Add plugins to Webpack configuration
    plugins: [new NodePolyfillPlugin()],

    // Configure module resolution
    resolve: {
      // Define fallbacks for Node.js core modules
      fallback: {
        url: require.resolve("url/"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        zlib: require.resolve("browserify-zlib"),
        path: require.resolve("path-browserify"),
        buffer: require.resolve("buffer/"),
        assert: require.resolve("assert/"),
        stream: require.resolve("stream-browserify"),
      },
    },
  },
});
