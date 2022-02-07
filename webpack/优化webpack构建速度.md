## 优化webpack构建速度
- 缩小构建目标，比如排除node_modules文件，通过exclude,include,不需要打包编译的插件库换成全局
- 使用缓存，记录打包内容，比如使用babel-loader时开启缓存
- 开启硬件加速，并行打包