const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss|.css$/,
        include: path.resolve(__dirname, '../'),
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          // sass-loader
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre',
      },
    ],
  },
};
