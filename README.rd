### 说明
根据swagger定义文件生成ts代码

### 用法
npx wyyt-swagger-to-ts 接口定义文件 目标ts文件

例:
```shell
npx wyyt-swagger-to-ts ./swagger.json ./swagger.ts
```

帮助说明:
```shell
npx wyyt-swagger-to-ts -h
```
参数说明:
-h:
    查看帮助
-t:
    根据tag筛选需要生成的接口列表
-n:
    不生成mock参数
