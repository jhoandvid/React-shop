const path=require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const CssMinimizerPlugin=require('css-minimizer-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');



module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'index.js',
        publicPath:"/",
        
    },
    
    resolve:{
        extensions:['.js', '.jsx']
    },


    "mode": 'production',

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

         /*  {
            test:/\.css$/i,
            use:[MiniCssExtractPlugin.loader, 'css-loader'], 
          } */


        ]
    },


    plugins:[
        new HtmlWebPackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),

        new MiniCssExtractPlugin({
            filename:'stylus/[name].css'
        }),
        new CleanWebpackPlugin()
        
    ],

    optimization:{
        minimize:true,
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }



}