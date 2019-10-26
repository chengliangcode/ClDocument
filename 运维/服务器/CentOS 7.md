# CentOS
## CentOS初始化配置及工具安装
1.重启网卡联网，一般安装好的虚拟机，默认都是动态分配的ip只要重启网卡联网就可以了
```
systemctl restart network
```
2.安装vim工具和ip查看工具
```
yum install -y vim
yum install -y net-tools
yum -y install epel-release.noarch
yum -y install htop
yum -y install bash-completion
# 重启
reboot
```
3.配置网卡为静态ip,(防止出现自动重新分配)
```
cd /etc/sysconfig/network-scripts/
vim ifcfg-ens33 

BOOTPROTO=static
ONBOOT=yes
IPADDR=192.168.38.128
NETMASK=255.255.255.0
GATEWAY=192.168.38.2
DNS1=8.8.8.8
虚拟机的话
Ip和网关可以看虚拟网络编辑器来分配
```