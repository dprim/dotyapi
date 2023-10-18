const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      options: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    fallback: {
      "url": require.resolve('url'),
      "fs": require.resolve('fs'),
      "assert": require.resolve('assert'),
      "crypto": require.resolve('crypto-browserify'),
      "http": require.resolve('stream-http'),
      "https": require.resolve('https-browserify'),
      "os": require.resolve('os-browserify/browser'),
      "buffer": require.resolve('buffer'),
      "stream": require.resolve('stream-browserify'),
      "querystring": require.resolve("querystring-es3")
    }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080
  }
};
