var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      'babel-polyfill',
      './src/index.jsx'
    ],
    vendor: [
      'd3',
      'react',
    ]
  },
  output: {
    path: path.join(__dirname, '../frontend/build/public/static/js/'),
    filename: 'reactApp.js',
    publicPath: '/static/js/',
    pathinfo: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.reactApp.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    // new webpack.DefinePlugin({
    //   'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development2') }
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ],
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loaders: 'style!css'
    }]
  }
}
