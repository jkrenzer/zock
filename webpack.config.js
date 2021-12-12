const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/entrypoints/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /(\.min)?\.css$/,
        use:  ['style-loader', 'lit-css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build/zock/js'),
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
