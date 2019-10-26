(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{205:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),s("h2",{attrs:{id:"安装docker及docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装docker及docker-compose"}},[t._v("#")]),t._v(" 安装docker及docker-compose")]),t._v(" "),s("h3",{attrs:{id:"docker-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-2"}},[t._v("#")]),t._v(" docker")]),t._v(" "),s("p",[t._v("1.下载yum工具并添加yum源")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum install -y yum-utils\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),s("p",[t._v("2.查看需要安装的版本")]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum list docker-ce --showduplicates\n")])])]),s("p",[t._v("3.安装选择的版本")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 例如安装 18.09.9-3.el7\nyum install -y docker-ce-18.09.9-3.el7\n")])])]),s("h3",{attrs:{id:"docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[t._v("#")]),t._v(" docker-compose")]),t._v(" "),s("p",[t._v("1.拉取github上的资源并赋权限 这里拉取的是1.24.1版本 可以到 "),s("code",[t._v("github")]),t._v(" 仓库上查看有没有新版本 "),s("a",{attrs:{href:"https://github.com/docker/compose",target:"_blank"}},[t._v("https://github.com/docker/compose")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n")])])]),s("h3",{attrs:{id:"docker镜像加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像加速"}},[t._v("#")]),t._v(" docker镜像加速")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('vim /etc/docker/daemon.json\n\n{\n    "registry-mirrors": ["https://j4087eqk.mirror.aliyuncs.com","https://registry.docker-cn.com","http://hub-mirror.c.163.com"]\n}\n\nsystemctl restart docker\n\n\n或者使用阿里的docker源\n登录阿里云>容器镜像服务>镜像加速器>加速器地址\n再就是和上面一样的操作\n\n')])])]),s("h2",{attrs:{id:"docker-compose-详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-详解"}},[t._v("#")]),t._v(" docker-compose 详解")]),t._v(" "),s("h3",{attrs:{id:"docker-compose-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-简介"}},[t._v("#")]),t._v(" docker-compose 简介")]),t._v(" "),s("p",[s("code",[t._v("docker-compose")]),t._v(" 是 "),s("code",[t._v("Docker容器")]),t._v(" 的编排工具，使用 "),s("code",[t._v("python")]),t._v(" 语言编写。基于 "),s("code",[t._v("yaml")]),t._v(" 配置文件，可以一次性启用一组容器，替代了shell脚本中的部分 "),s("code",[t._v("docker")]),t._v(" 指令操作，例如："),s("code",[t._v("docker-compose up")]),t._v(" 替代了 "),s("code",[t._v("docker run")])]),t._v(" "),s("h3",{attrs:{id:"yaml文件字段解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml文件字段解析"}},[t._v("#")]),t._v(" yaml文件字段解析")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.7'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#docker 版本所对应的 compose文件版本 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义容器,用来区分多个容器（并不是容器的名称）")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx：1.17.5  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#容器所使用的镜像名称 格式 <镜像名称>[:版本] 不定义版本默认使用latest(最后/最新版本)")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my_nginx "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#容器名称")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#docker重启策略 可选参数有 no | always | on-failure[:number] 都是字面意思")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启策略：当docker重启时之前在运行容器的决策")]),t._v("\n")])])]),s("h3",{attrs:{id:"docker版本所对应的compose文件版本表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker版本所对应的compose文件版本表"}},[t._v("#")]),t._v(" docker版本所对应的compose文件版本表")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.docker.com/compose/compose-file/",target:"_blank"}},[t._v("https://docs.docker.com/compose/compose-file/")]),s("br"),t._v("\ndocker -v 查看版本")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Compose file format")]),t._v(" "),s("th",[t._v("Docker Engine release")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("3.7")]),t._v(" "),s("td",[t._v("18.06.0+")])]),t._v(" "),s("tr",[s("td",[t._v("3.6")]),t._v(" "),s("td",[t._v("18.02.0+")])]),t._v(" "),s("tr",[s("td",[t._v("3.5")]),t._v(" "),s("td",[t._v("17.12.0+")])]),t._v(" "),s("tr",[s("td",[t._v("3.4")]),t._v(" "),s("td",[t._v("17.09.0+")])]),t._v(" "),s("tr",[s("td",[t._v("3.3")]),t._v(" "),s("td",[t._v("17.06.0+")])]),t._v(" "),s("tr",[s("td",[t._v("3.2")]),t._v(" "),s("td",[t._v("17.04.0+")])]),t._v(" "),s("tr",[s("td",[t._v("3.1")]),t._v(" "),s("td",[t._v("1.13.1+")])]),t._v(" "),s("tr",[s("td",[t._v("3.0")]),t._v(" "),s("td",[t._v("1.13.0+")])]),t._v(" "),s("tr",[s("td",[t._v("2.4")]),t._v(" "),s("td",[t._v("17.12.0+")])]),t._v(" "),s("tr",[s("td",[t._v("2.3")]),t._v(" "),s("td",[t._v("17.06.0+")])]),t._v(" "),s("tr",[s("td",[t._v("2.2")]),t._v(" "),s("td",[t._v("1.13.0+")])]),t._v(" "),s("tr",[s("td",[t._v("2.1")]),t._v(" "),s("td",[t._v("1.12.0+")])]),t._v(" "),s("tr",[s("td",[t._v("2.0")]),t._v(" "),s("td",[t._v("1.10.0+")])]),t._v(" "),s("tr",[s("td",[t._v("1.0")]),t._v(" "),s("td",[t._v("1.9.1.+")])])])]),t._v(" "),s("h3",{attrs:{id:"restart-on-failure-解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restart-on-failure-解析"}},[t._v("#")]),t._v(" restart on-failure 解析")]),t._v(" "),s("p",[t._v("restart: on-failure[:number]"),s("br"),t._v(" "),s("code",[t._v("on-failure")]),t._v(" 表示，若容器的退出状态非0，则docker自动重启容器，还可以指定重启次数，若超过指定次数未能启动容器则放弃重启\n查看推出状态  "),s("code",[t._v("docker ps")]),t._v(" "),s("code",[t._v("STATUS")]),t._v(" 栏会显示当前容器的状态 如果出现 "),s("code",[t._v("Exited(255)")]),t._v(" 意味着异常停止, 此时 "),s("code",[t._v("on-failure")]),t._v(" 生效")])])}),[],!1,null,null,null);e.default=r.exports}}]);