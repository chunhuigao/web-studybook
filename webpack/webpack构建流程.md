## webpack 原理

webpack 只是一个打包模块的机制，只是把依赖的模块转化成可以代表这些包的静态文件

## Webpack 构建流程

- 从 Entry 开始，递归解析 Entry 依赖的所有 Module，每找到一个 Module，就会根据 Module.rules 里配置的 Loader 规则进行相应的转换处理，
- 对 Module 进行转换后，再解析出当前 Module 依赖的 Module，
- 这些 Module 会以 Entry 为单位进行分组，即为一个 Chunk。
- 因此一个 Chunk，就是一个 Entry 及其所有依赖的 Module 合并的结果。
- 最后 Webpack 会将所有的 Chunk 转换成文件输出 Output。
- 在整个构建流程中，Webpack 会在恰当的时机执行 Plugin 里定义的逻辑，从而完成 Plugin 插件的优化任务

## webpack 配置项

- entry，指定了模块的入口，它让源文件加入构建流程中被 webpack 控制。
- output，配置如何输出最终的代码结果。
- module，配置各种类型的模块的处理规则和解析策略。
- rosolve，配置 webpack 寻找模块的规则。
- plugin，配置扩展插件，扩展 webpack 的更多功能。
- devServer，配置 DevServer，实现本地 http 服务、模块热替换、source map 调试等。

## 简单的webpack
- 读取文件分析模块依赖
- 对模块进行解析执行(深度遍历)
- 针对不同的模块使用相应的loader
- 编译模块，生成抽象语法树AST。
- 循环遍历AST树，拼接输出js。
