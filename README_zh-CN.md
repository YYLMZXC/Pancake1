# 饼子

托管在您自己的 PC 中的运行中的 Genshin Impact 私人服务器。

### ****警告****
* Please use a [VPN](https://en.wikipedia.org/wiki/Virtual_private_network) or a [Virtual Machine](https://en.wikipedia.org/wiki/Virtual_machine) fiddler脚本应该阻止所有日志到mihoyo的服务器但我不确定，请谨慎使用这个项目（我暂时没有被禁止但这并不意味着你'没有冒险被禁止）
* ****如果您想使用它，请通过 discord (NicknameGG#0001) 与我联系，因为这需要另外两个特殊文件才能工作。****

# 安装

安装假设您已经在您的电脑中安装了接下来的东西
* [**git**](https://git-scm.com/downloads)  如果您不想安装 git，您可以将项目下载为 [.zip](https://github.com/NicknameGG/pancake/archive/refs/heads/main.zip)
* [**node-js**](https://nodejs.org/en/download/) 
* [**Fiddler**](https://www.telerik.com/download/fiddler) 你可以使用主机文件

如果您没有它们，请安装它们，否则您将无法启动服务器。
## 项目（服务器本身）

1. clone the project using `git clone https://github.com/NicknameGG/pancake` or [download it as .zip](https://github.com/NicknameGG/pancake/archive/refs/heads/main.zip))
1. 运行`modules.bat`以安装所需的模块
1. 您现在可以在 IDE 中打开项目

## Fiddler（流量重定向器）

1. Open fiddler and go to FiddlerScripts
  ![image](https://user-images.githubusercontent.com/52223947/113501027-ba59d780-94df-11eb-9b44-343a435eea67.png)
1. 复制`fiddler.cs`内容并将其粘贴到提琴手
1. 按**保存脚本**按钮
  ![image](https://user-images.githubusercontent.com/52223947/113501041-d2c9f200-94df-11eb-91fd-ccfe53589c3f.png)

Now open Genshin Impact and have fun.

# 信息

我制作这个项目是为了学习如何将客户端发送到服务器的数据反向，如果我有足够的动力去做它，我会从事这个工作，这个项目将是私人的，只有我和一些朋友可以看到/知道它。

# 怎么玩

1. 打开提琴手
1. 双击`start.bat`

**警告**

> **如果您想在服务器中玩，请不要关闭 Fiddler 或控制台**

目前，您**只能**使用不存在的电子邮件和密码登录。

# 全部

* Login
![image](https://user-images.githubusercontent.com/52223947/113501273-0d805a00-94e1-11eb-8c0a-c44427e9f315.png)
* KCP Packet Handler
no image
* Announcements
![image](https://user-images.githubusercontent.com/52223947/113501296-356fbd80-94e1-11eb-8891-3d6584d097e8.png)

# 工作正在进行中

能够使用其他字符

* # 使用的模块

  用于此项目的模块，将添加更多。

  - 网络 - TCP 服务器
  - http - HTTP 服务器
  - dgram - UDP 服务器
  - node-kcp - KCP 服务器
  - protobuff-js - Protobuff 编码
  - sqlite3 - 数据库读取
  - udp-proxy - 用作嗅探器

# Skultz
he is still gay

* [REDACTED]
