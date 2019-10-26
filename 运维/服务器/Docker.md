# Docker

## 安装docker及docker-compose

### docker
1.下载yum工具并添加yum源
```
yum install -y yum-utils
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
2.查看需要安装的版本
```shell script
yum list docker-ce --showduplicates
```
3.安装选择的版本
```
# 例如安装 18.09.9-3.el7
yum install -y docker-ce-18.09.9-3.el7
```
### docker-compose
1.拉取github上的资源并赋权限
```
curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### docker镜像加速
```
vim /etc/docker/daemon.json

{
    "registry-mirrors": ["https://j4087eqk.mirror.aliyuncs.com","https://registry.docker-cn.com","http://hub-mirror.c.163.com"]
}

systemctl restart docker


或者使用阿里的docker源
登录阿里云>容器镜像服务>镜像加速器>加速器地址
再就是和上面一样的操作

```