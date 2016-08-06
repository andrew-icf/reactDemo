var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map', //gives us line numbers for errors, debugging
  entry: [ //where webpack is gonna look for our files
    'webpack-dev-server/client?http://127.0.0.1:8080/', //port
    'webpack/hot/only-dev-server', //live re-loading
    './src' // folder where webpack is looking for initial file(default index.js)
  ],
  output: { // where it will output our files or for production or you can use webpack dev server
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: { //look for the files to be bundled together
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: { //where we define our loaders
    loaders: [
      {
        test: /\.jsx?$/, //going to use js files but the "?" means we can also use jsx files
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'] //react syntax includes jsx
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //live reloading or hot reloading
    new webpack.NoErrorsPlugin() //wont compile if there is an error
  ]
};
