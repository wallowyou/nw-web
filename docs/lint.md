# lint

关于`prettier`,`eslint`,`commitlint`,`stylelint`的规范配置
Eslint+Pettier+stylelint+commitlint 统一开发规范和代码提交规范

## install

```
pnpm install @nw-web/lint -D
```
## 文件
该安装包下面有以下几个默认的配置
```
|-- commitlint.js  commitlint配置
|-- eslint.js eslint配置
|-- lintstaged.js lint-staged配置
|-- prettier.js prettier配置
|-- stylelint.js prettier配置
```
## 使用
分别在各自的项目文件中配置

```js
module.exports = require('@nw-web/lint/eslint')


```
