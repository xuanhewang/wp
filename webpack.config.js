// var path = require('path');
//
// module.exports = {
//     entry: path.resolve(__dirname, 'src/index.js'),
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'bundle.js'
//     },
// };
// var path = require('path');
//
// module.exports = {
//     entry: {
//       entry1: './src/entry1.js',
//       entry2: './src/entry2.js',
//     },
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: '[name].js'
//     },
// };
// var path = require('path');
//
// module.exports = {
//     entry: path.resolve(__dirname, 'src/index.js'),
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'bundle.js',
//     },
//     module: {
//       loaders: [
//         {
//           test: /\.js$/,
//           loader: 'babel-loader'
//         }
//       ]
//     }
// };
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devServer: {
      publicPath: "/static/",
      stats: { colors: true },
      port: 8080,
      contentBase: 'build',
      inline: true
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    }
};
