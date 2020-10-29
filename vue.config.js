module.exports = {
  productionSourceMap: false,
  //   css: {
  //     sourceMap: false,
  //     // css预设器配置项
  //     loaderOptions: {
  //       less: {
  //         javascriptEnabled: true // 设置为true
  //       }
  //     }
  //   },
  configureWebpack: {
    // 警告    的性能提示
    // performance: {
    //   hints: false
    // },
    optimization: {
      splitChunks: {
        chunks: 'all', // 共有3个值"initial"，"async"和"all"。配置后，代码分割优化仅选择初始块，按需块或所有块
        // maxSize: 300000, // （默认值：300000）块的最小大小
        minSize: 30000, // （默认值：30000）块的最小大小
        minChunks: 1, // （默认值：1）在拆分之前共享模块的最小块数
        maxAsyncRequests: 5, // （默认为5）按需加载时并行请求的最大数量
        maxInitialRequests: 3, // （默认值为3）入口点的最大并行请求数
        automaticNameDelimiter: '~', // 默认情况下，webpack将使用块的来源和名称生成名称，例如vendors~main.js
        name: true,
        cacheGroups: {
          // 以上条件都满足后会走入cacheGroups进一步进行优化的判断
          libs: {
            test: /[\\/]node_modules[\\/]/, // 判断引入库是否是node_modules里的
            name: 'chunk-libs',
            priority: 10,
            chunks: 'initial',
          },
          vant: {
            test: /[\\/]node_modules[\\/]vant[\\/]/,
            name: 'chunk-vant',
            priority: 20,
          },
          default: {
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true, // 允许在模块完全匹配时重用现有的块，而不是创建新的块。
          },
        },
      },
    },
  },
}
