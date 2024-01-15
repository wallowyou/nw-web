# setup
`pnpm install`
# 自动化发布流和生成发布记录
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
