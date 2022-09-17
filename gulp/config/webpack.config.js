const isBuild = process.argv.includes('--build')
const webpackConfig = {
  mode: isBuild ? 'production' : 'development',
  entry: {
    // 'jquery-1.11.3.min': './src/js/jquery-1.11.3.min.js',
    // 'mapController': './src/js/mapController.js',
    'mapTransport': './src/js/mapTransport.js',
    // 'initTransportRender': './src/js/components/initTransportRender.js',
  },
  output: {
    filename: '[name].js'
  }
}


export { webpackConfig }
