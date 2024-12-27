// webpack.config.js

const path = require("path");

module.exports = {
  // Define the entry point of your application
  entry: "./src/index.js", // Change this to the entry point of your app

  // Define the output configuration
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file name
  },

  // Configure module rules
  module: {
    rules: [
      {
        test: /\.m?js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: [
          /node_modules/, // Exclude node_modules from processing
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Handles CSS imports
      },
    ],
  },

  // Ignore specific warnings
  ignoreWarnings: [
    {
      module: /@mediapipe\/tasks-vision/, // Regex to match the module name
      message: /Failed to parse source map/, // Regex to match the specific warning message
    },
  ],

  // Set the mode to development or production
  mode: "development", // Change to 'production' for production builds

  // Configure source maps for debugging
  devtool: "source-map", // Configure source maps
};
