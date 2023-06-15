# school-book
## 项目介绍
预约系统，分为客户预约界面和预约处理界面。
前端：vue + vite + element
后端：python (fast api)
数据库：mongodb
## 安装
### 安装mongodb
Windows 平台安装 MongoDB
https://www.runoob.com/mongodb/mongodb-window-install.html
Linux平台安装MongoDB
https://www.runoob.com/mongodb/mongodb-linux-install.html
Mac OSX 平台安装 MongoDB
https://www.runoob.com/mongodb/mongodb-osx-install.html
### 安装npm和node
安装 Node.js 和 npm ：
1. 访问 Node.js 官网 [https://nodejs.org/zh-cn/，点击](https://nodejs.org/zh-cn/，点击) "下载" 按钮，选择对应操作系统的版本进行下载。
2. 安装 Node.js。Windows 下载 msi 文件后直接双击安装即可完成安装。MacOS 下载 pkg 文件后也是双击安装。
3. 安装完毕后，在终端中运行 `node -v` 和 `npm -v` 命令来分别检查 Node.js 和 npm 是否安装成功。

如果在终端中可以正确输出版本号，则安装成功。至此，你已经成功安装了 Node.js 和 npm。
### 前端依赖安装
```bash
cd hello
npm install
```
### 
### 后端env环境依赖安装
```bash
cd python-book-backend
.\venv\Scripts\activate
pip install -r requirement
```
## 运行
开启mongodb服务

```bash
# 开启前端项目
cd hello
npm run dev
cd ..
# 开启后端项目
cd python-book-backend
.\venv\Scripts\activate
uvicorn index:app --reload
```