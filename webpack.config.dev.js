const path=require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'index.js',
        
    },
    
    resolve:{
        extensions:['.js', '.jsx']
    },
    mode:'development',

    module:{
        rules:[
          {  
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader'
            }
          },

          {
            test:/\.html$/,
            use:{
            
                loader:'html-loader'
            }
          },
        
          {
            test:/\.(css|scss)$/,
            use:['style-loader', 'css-loader', 'sass-loader']
         },
          /* {
            test:/\.css$/i,
            use:[MiniCssExtractPlugin.loader, 'css-loader']
          }  */


        ]
    },

    devServer:{
        static:path.join('__dirname', 'dist'),
        compress:true,
        historyApiFallback:true,
        port:3000,
        open:true
    },

    plugins:[
        new HtmlWebPackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        })
    ]



}