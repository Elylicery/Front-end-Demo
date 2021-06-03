
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //打包css,生成独立的main.css文件

module.exports = {
  entry:"./src/main.ts",
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"main.js"
  },
  devServer:{
    contentBase:"/dist",
    open:true
  },
  resolve:{
    "extensions":['.ts','.js','.json']//省略后缀名，注意顺序
  },
  module:{
    rules:[
      //全局样式
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,'css-loader'],
        exclude:[
          path.resolve(__dirname,'src/components')//排除掉的文件
        ]
      },
      //局部样式模块化
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,{
          loader:'css-loader',
          options:{
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]",//生成class语义化
            },
          }
        }],
        include:[
          path.resolve(__dirname,'src/components')//模块化的css
        ]
      },
      {
        test:/\.(eot|woff2|woff|ttf|svg)$/,
        use:[
          {
            loader:'file-loader',
            options:{
              outputPath:'iconfont'
            }
          }
        ]
      },
      {
        test:/\.ts$/,
        use:['ts-loader'],
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  mode:"production"
}