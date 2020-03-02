module.exports = {
  mode: "production",
  entry: ["./dist/sdk.js"],
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
    libraryTarget: "umd"
  }
};
