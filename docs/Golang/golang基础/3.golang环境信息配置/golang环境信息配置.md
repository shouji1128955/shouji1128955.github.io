# Goproxy.cn

### [用法](https://goproxy.cn/#usage)

### 在 Gogland 中禁用调试输出

在我的调试控制台中更新到最新的 Gogland 版本后，我看到了这样的信息

```shell
GOROOT=D:\programinstall\golang #gosetup
GOPATH=D:\golangproject #gosetup
D:\programinstall\golang\bin\go.exe build -o C:\Users\zhanglaiqiang\AppData\Local\JetBrains\GoLand2023.1\tmp\GoLand\___7go_build_main_go.exe D:\golangproject\src\test2\main.go #gosetup
C:\Users\zhanglaiqiang\AppData\Local\JetBrains\GoLand2023.1\tmp\GoLand\___7go_build_main_go.exe #gosetup
true
```



**最佳答案**



1. 打开帮助 |寻找行动……
2. 键入 Registry 并按 Enter。
3. 在那里找到 go.run.processes.with.pty 并将其关闭。



### goland快捷键操作

快速的选中删除的一行

- 按下 `Ctrl + Y`（对于 Windows/Linux 用户）或 `Cmd + Delete`（对于 Mac 用户）。

快速的在光标处换行

- 在 Windows/Linux 上，可以使用 `Shift + Enter` 快速在下方插入新行
- 在 macOS 上，可以使用 `Cmd + Enter`。

```shell
CTRL+X 删除当前光标所在行
CTRL+D 复制当前光标所在行
ALT+Q 可以看到当前方法的声明
CTRL+Backspace 按单词进行删除
```

goland快捷键

[GoLand 快捷键 - MikuDance - 博客园 (cnblogs.com)](https://www.cnblogs.com/just-save/p/12389901.html)



[Go 1.13 及以上（推荐）](https://goproxy.cn/#usage-go-113-and-above-recommended)

打开你的终端并执行

```
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
```

完成。

[macOS 或 Linux](https://goproxy.cn/#usage-macos-or-linux)

打开你的终端并执行

```
$ export GO111MODULE=on
$ export GOPROXY=https://goproxy.cn
```

或者

```
$ echo "export GO111MODULE=on" >> ~/.profile
$ echo "export GOPROXY=https://goproxy.cn" >> ~/.profile
$ source ~/.profile
```

完成。

[Windows](https://goproxy.cn/#usage-windows)

打开你的 PowerShell 并执行

```
C:\> $env:GO111MODULE = "on"
C:\> $env:GOPROXY = "https://goproxy.cn"
```

或者

```
1. 打开“开始”并搜索“env”
2. 选择“编辑系统环境变量”
3. 点击“环境变量…”按钮
4. 在“<你的用户名> 的用户变量”章节下（上半部分）
5. 点击“新建…”按钮
6. 选择“变量名”输入框并输入“GO111MODULE”
7. 选择“变量值”输入框并输入“on”
8. 点击“确定”按钮
9. 点击“新建…”按钮
10. 选择“变量名”输入框并输入“GOPROXY”
11. 选择“变量值”输入框并输入“https://goproxy.cn”
12. 点击“确定”按钮
```

完成。

------

### [自托管 Go 模块代理](https://goproxy.cn/#self-hosted-go-module-proxy)

你的代码永远只属于你自己，因此我们向你提供目前世界上最炫酷的自托管 Go 模块代理搭建方案。通过使用 [Goproxy](https://github.com/goproxy/goproxy) 这个极简主义项目，你可以在现有的任意 Web 服务中轻松地引入 Go 模块代理支持，要知道 Goproxy.cn 就是基于它搭建的。

创建一个名为 `goproxy.go` 的文件

```
package main

import (
	"net/http"
	"os"

	"github.com/goproxy/goproxy"
)

func main() {
	http.ListenAndServe("localhost:8080", &goproxy.Goproxy{
		GoBinEnv: append(
			os.Environ(),
			"GOPROXY=https://goproxy.cn,direct", // 使用 Goproxy.cn 作为上游代理
			"GOPRIVATE=git.example.com",         // 解决私有模块的拉取问题（比如可以配置成公司内部的代码源）
		),
		ProxiedSUMDBs: []string{
			"sum.golang.org https://goproxy.cn/sumdb/sum.golang.org", // 代理默认的校验和数据库
		},
	})
}
```

并且运行它

```
$ go run goproxy.go
```

然后通过把 `GOPROXY` 设置为 `http://localhost:8080` 来试用它。另外，我们也建议你把 `GO111MODULE` 设置为 `on`。

就这么简单，一个功能完备的 Go 模块代理就搭建成功了。事实上，你还可以将 [Goproxy](https://github.com/goproxy/goproxy) 结合着你钟爱的 Web 框架一起使用，比如 [Gin](https://pkg.go.dev/github.com/gin-gonic/gin#WrapH) 和 [Echo](https://pkg.go.dev/github.com/labstack/echo/v4#WrapHandler)，你所需要做的只是多添加一条路由而已。更高级的用法请查看[文档](https://pkg.go.dev/github.com/goproxy/goproxy)。



### golang跨平台编译打包程序

编译运行在 amd64位 linux系统

```go
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build
```

编译运行在 mac m芯片系统

```go
CGO_ENABLED=0 GOOS=darwin GOARCH=arm64 go build
```

编译运行在 amd64位 windows系统

```go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
```

