const path = require("path");


module.exports = {
  devServer: {
    port: 3000
  },
  webpack: {
    output: {
      clean: {
        dry: true,
      },
      path: path.resolve(__dirname, "dist")
    },
    // alias: {
    //   "~": path.resolve(__dirname, "src")
    // }
  },
};
