module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: "http://quitzone.local",
    watchOptions: {
      ignored: ['/app/node_modules'],
      poll: true
    },
    disableHostCheck: true
  },
};
