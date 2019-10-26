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
1.拉取github上的资源并赋权限 这里拉取的是1.24.1版本 可以到 `github` 仓库上查看有没有新版本 <a href='https://github.com/docker/compose' target='_blank'>https://github.com/docker/compose</a>
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

## docker-compose 详解
### docker-compose 简介
`docker-compose` 是 `Docker容器` 的编排工具，使用 `python` 语言编写。基于 `yaml` 配置文件，可以一次性启用一组容器，替代了shell脚本中的部分 `docker` 指令操作，例如：`docker-compose up` 替代了 `docker run`
### yaml文件字段解析
```yaml
version: '3.7' #docker 版本所对应的 compose文件版本 
serviers:
    nginx: #定义容器,用来区分多个容器（并不是容器的名称）
      image: nginx：1.17.5  #容器所使用的镜像名称 格式 <镜像名称>[:版本] 不定义版本默认使用latest(最后/最新版本)
      container_name: my_nginx #容器名称
      restart: always #docker重启策略 可选参数有 no | always | on-failure[:number] 都是字面意思
      #重启策略：当docker重启时之前在运行容器的决策
 ```
 ### docker版本所对应的compose文件版本表
<a href='https://docs.docker.com/compose/compose-file/' target='_blank'>https://docs.docker.com/compose/compose-file/</a>  
docker -v 查看版本
Compose file format | Docker Engine release
-|-|
3.7|18.06.0+
3.6|18.02.0+
3.5|17.12.0+
3.4|17.09.0+
3.3|17.06.0+
3.2|17.04.0+
3.1|1.13.1+
3.0|1.13.0+
2.4|17.12.0+
2.3|17.06.0+
2.2|1.13.0+
2.1|1.12.0+
2.0|1.10.0+
1.0|1.9.1.+

### restart on-failure 解析
restart: on-failure[:number]  
`on-failure` 表示，若容器的退出状态非0，则docker自动重启容器，还可以指定重启次数，若超过指定次数未能启动容器则放弃重启
查看推出状态  `docker ps`  `STATUS` 栏会显示当前容器的状态 如果出现 `Exited(255)` 意味着异常停止, 此时 `on-failure` 生效