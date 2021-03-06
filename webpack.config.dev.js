const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const ClientAppPath = path.resolve(__dirname, './app/client/App.jsx'); // 客户端打包路径
const ManageAppPath = path.resolve(__dirname, './app/manage/App.jsx'); // 后台打包路径

module.exports = {
  entry: [
    'webpack-hot-middleware/client', // 热加载中间件
    ClientAppPath,
    // ManageAppPath,
  ],
  // output.publicPath 表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换
  output: {
    path: path.resolve(__dirname, 'app/client'), // 与APP_PATH一致的文件目录
    filename: 'devClient.bundle.js',
    chunkFilename: '[id]-split-[name].bundle.js', // 代码分割
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // 开启CSS Module
              localIdentName: '[name]__[local]-[hash:base64:5]',
            },
          },
          // 'sass-loader',//处理sass和scss文件
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() { // 这里配置postcss的插件
                return [autoprefixer];
              },
            },
          },
        ],
      },
      { // 处理图片，name属性是输出的图片文件地址，在output目录下生成图片目录以及文件
        test: /\.(png|jpg|gif|webp')$/,
        //  include:path.resolve(__dirname,'/client/assets'),
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'bundleImg/[hash:8].[name].[ext]',
          },
        }],
      },

      { // 处理字体
        test: /\.(woff|ttf|svg|eot|woff2)$/,
        //  include:path.resolve(__dirname,'/client/assets'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'bundleFonts/[hash:8]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
