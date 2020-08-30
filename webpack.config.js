const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  dist: path.resolve(__dirname, 'dist'),
  web: path.resolve(__dirname, 'dist/web'),
};

module.exports = {
  mode: 'production', // suppress warning
  entry: {
    twt: [PATHS.entryPoint],
    'twt.min': [PATHS.entryPoint],
  },
  output: {
    path: PATHS.web,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'TwtJS',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        cache: true,
        parallel: true,
        terserOptions: {
          parse: {},
          compress: {},
          mangle: {
            toplevel: true,
          },
          minimize: true,
          output: null,
          toplevel: false,
          nameCache: null,
        },
        sourceMap: true,
      }),
    ],
  },
};
