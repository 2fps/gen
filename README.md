# gen
根，静态化系统辅助，负责简单的数据统计。

基于nest + mongodb

## 环境搭建
本人是在ubuntu16.04下搭建的。

### 安装mongodb
```
sudo apt-get install mongodb

mongo -version
```

安装完成后，可以尝试使用version看是否能显示版本，能则安装成功。

### 安装node与npm
```
sudo wget https://nodejs.org/dist/v11.9.0/node-v11.9.0-linux-x64.tar.xz
sudo tar -xvf node-v11.9.0-linux-x64.tar.xz
sudo mv node-v11.9.0-linux-x64 /usr/local
sudo ln -s /usr/local/node-v11.9.0-linux-x64/bin/node /usr/local/bin/node
sudo ln -s /usr/local/node-v11.9.0-linux-x64/bin/npm /usr/local/bin/npm

node -v
npm -v
```

能输出版本，则安装成功。
