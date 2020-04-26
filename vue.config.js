module.exports = {
    publicPath: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://106.14.26.32:8080',  //这里是目标服务器地址
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''       //这里一定要为空
                }
            }
        }
    }
}
//   /api/login  => http://127.0.0.1:8100/login
