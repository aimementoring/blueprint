module.exports = {
  title: "AIME Portal Style Guide",
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader?precision=10"],
        },
      ],
    },
  },
  template: {
    favicon: "public/favicon.ico",
  },
};
