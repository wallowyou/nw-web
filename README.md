# setup
`pnpm install`
# 安装

`pnpm install -w`
`-w` 表示安装到公共模块的 packages.json 中

`pnpm install vue --save -r --filter @nw-web/ui`  把包安装到指定的项目下
# 项目架构
参考:https://www.cnblogs.com/wp-leonard/p/17894496.html
## 1. Monorepo
整个工程的代码组织采用 Monorepo 的组织方式，使用工具 pnpm + workspace 来实现。所以全部项目都是放在一个仓库里的，包括文档、组件。
工程具体分为以下几块，**以文档和组件库**为两大类进行分块：

1. 文档工程（docs）

+ 安装指引
+ 组件使用文档（`utils`、`ant-design-vue`、`hooks`、`nw-ui`）
+ 组件开发文档
2. 组件库（packages）
+ `ant-design-vue`
+ `hooks`
+ `nw-ui`
+ `utils`




其中 `nw-ui`用来规划编写自定义组件的，`utils`用来写通用的工具函数，`hooks`用来写通用的hook函数，`ant-design-vue`用来二次封装ant-design-vue组件，后续如果需要二次封装其他组件库组件，也可以额外增加文件夹。文档采用vitepress搭建。

# 自动化发布流和生成发布记录
## version
遵循 semver 语义化版本（验证小工具），格式一般为 `{major}.{minor}.{patch}`。
+ major：大功能/特性更新、对用户使用方式有影响；
+ minor：新功能、对用户使用方式无影响；
+ patch：bug 修复/不影响用户

这里要借用到某个插件——  `changesets`。

它是一款切合pnpm体系下的一款管理版本控制和变更日志的工具，专注于多包存储库。虽然pnpm下暂时没有像lerna完善的发布流程工具，但changesets也算的上是官方推荐的一款，将就用吧。
changesets的执行流程大概可以理解为：
**生成临时的changelog → 消耗changelog生成组件的更新记录，并更新组件version → 发布组件**
## 安装changesets
`pnpm install @changesets/cli`
## 初始化changesets配置
`pnpm changeset init`
根目录运行changeset init，会生成一个 .changeset 目录，里面会生成一个 changeset 的 config 文件（linked字段改成你自己的包名）：
## 配置changeset发布流命令
然后在根目录的package.json添加以下命令：
```
"changeset": "changeset",
"update:version": "changeset version",
"release": "changeset publish",
```
其中：

• changeset：生成临时的changelog

• update:version：消耗changelog生成组件的更新记录，并更新组件version

• release：发布组件
## 生成changeset临时日志
执行命令：`pnpm changeset`，按提示输出，最后生成临时日志。
日志里面包含发版的组件包，版本更新类型（major | minor | patch），最下面带有更新内容。
## 消耗日志
执行命令：`pnpm update:version`，临时日志被消耗，会在组件包生成`CHANGELOG.md`，另外，`package.json`的版本号也同步修改。
## 发版
执行命令：`pnpm release`，更新组件会发布到npm。
