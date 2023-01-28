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
        extensions:['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
          }
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
  
           {
              test:/\.(png|svg|jpg|gif)$/,
              type:'asset'
          }
            /* {
              test:/\.css$/i,
              use:[MiniCssExtractPlugin.loader, 'css-loader']
            }  */
  
  
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