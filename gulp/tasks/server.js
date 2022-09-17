const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.paths.build.html}`
    },
    notify: false,
    startPath: '/',
    port: 3000
  })
}


export default server
