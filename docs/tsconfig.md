# tsconfig

关于typescript的`tsconfig.json`的一些默认配置
## install

```
pnpm install @nw-web/tsconfig -D
```
## 文件
该安装包下面有以下几个默认的配置
```
|-- base.json  基本配置
|-- server.json commonjs配置
```
## 使用
在自己项目的`tsconfig.json`文件中配置extends
```json
{
  "extends": "@nw-web/tsconfig/base.json",
  "compilerOptions": {
    "baseUrl": ".",
  },
}

```


