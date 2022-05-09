module.exports = {
    // options...
    devServer: {
        allowedHosts: "all",
        proxy: {
            '^/api': {
              target: 'https://testedjango.robsonjoo.repl.co',
              ws: true,
              changeOrigin: true
            },
        }           
    }
}