---
sidebar_position: 2
---

# 2. 快速入门

:::warning 注意事项

避免本产品发生故障或损坏，请遵守以下事项：
- 使用时，本产品应放置在稳固、平坦、不导电的表面上。
- 请勿随意拨动摇臂，使用时请恢复与外壳平行的初始状态。
- 避免舵机长时间处于堵转状态，以防止过流发热并影响其使用寿命。
- 请勿挤压、扭转相机翻折机构，严禁超过最大翻折角度使用，以免造成不可逆损坏。
- 安装 SD 卡时需要取下挡板，注意不要将 SD 卡塞入外壳与 RDK X5 之间缝隙。
- 将不兼容的设备与本品连接时，导致设备损坏，将不支持维修。
- 所有与本产品配套使用的外围设备均应符合使用国家的相关标准，并标明相应地确保满足安全和性能要求。

:::

## 开箱清单

- RDK X5 Magicbox，内置 32GB TF 卡
- 数据线：
  - USB‑A 转 USB‑C 数据线 ×1
  - USB‑C 转 USB‑C 数据线 ×1

## 系统烧录

:::warning 注意

RDK X5 Magicbox 出厂已预置 RDK OS，可参考 [快速上手指导视频](#快速上手指导视频) 直接体验。  
如有重新烧录需求，请按以下步骤拆卸 TF 卡，进行系统烧录。

:::

1. 使用螺丝刀按逆时针方向拧下两颗挡板固定螺丝，打开 TF 卡挡板。
2. 拆卸 TF 卡进行系统烧录，烧录步骤参考 [系统烧录](https://developer.d-robotics.cc/rdk_doc/Quick_start/install_os/rdk_x5)。
3. 烧录完成后将 TF 卡重新插入 RDK X5 Magicbox 内部 TF 卡槽，安装挡板，拧紧两颗挡板固定螺丝。

    ![系统烧录](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/sd_card_install_os.jpg)





## 快速上手指导视频

<video controls width="100%" preload="metadata">
  <source src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/magicbox.mp4" />
  您的浏览器不支持 video 标签。
</video>

## 供电

- Type-C 接口，5V/5A DC 输入。
- 使用支持 PD 3.0 协议的电源适配器通过电源口为 RDK X5 Magicbox 供电。

## 网络配置

### 方式一：闪连配置说明

1. 进入 PC ”控制面板 -> 网络和 Internet -> 网络和共享中心 -> 更改适配器设置”。
2. 连接 PC 与 RDK X5 Magicbox 左侧闪连口。
3. 找到对应的以太网设备，右键选择 “属性”

    :::warning 注意
    请选择正确的以太网设备。
    :::

    <!-- ![选择以太网](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Ethernet-Settings.png) -->
    <img 
      src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Ethernet-Settings.png" 
      style={{ width: '100%', height: 'auto' }}
    />

4. 找到 “网络 -> Internet 协议版本 4” 选项并双击打开。

    <!-- ![选择Internet协议版本4](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Internet-Protocol-Version.png) -->
    <img 
      src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Internet-Protocol-Version.png" 
      style={{ width: '400px', height: 'auto' }}
    />

5. 在下图位置填入对应的网络参数，点击确定。

    <!-- ![配置网络参数](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Network-Parameter-Settings.png) -->
    <img 
      src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Network-Parameter-Settings.png" 
      style={{ width: '400px', height: 'auto' }}
    />

6. 打开 powershell，使用以下命令确认是否能够访问开发板：`ping 192.168.128.10`。
  
### 方式二：有线网口配置说明

1. 进入 PC ”控制面板 -> 网络和 Internet -> 网络和共享中心 -> 更改适配器设置”。
2. 连接 PC 与 RDK X5 Magicbox 右侧网口。
3. 找到对应的以太网设备，右键选择 “属性”

    :::warning 注意
    请选择正确的以太网设备。
    :::

    <!-- ![选择以太网](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Ethernet-Settings.png) -->
    <img 
      src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Ethernet-Settings.png" 
      style={{ width: '100%', height: 'auto' }}
    />

4. 找到 “网络 -> Internet 协议版本 4” 选项并双击打开。

    <!-- ![选择Internet协议版本4](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Internet-Protocol-Version.png) -->
    <img 
      src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Internet-Protocol-Version.png" 
      style={{ width: '400px', height: 'auto' }}
    />

5. 在下图位置填入对应的网络参数，点击确定。

    <!-- ![配置网络参数](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Network-Parameter-Settings-ethernet.png) -->
    <img 
      src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Network-Parameter-Settings-ethernet.png" 
      style={{ width: '400px', height: 'auto' }}
    />

6. 打开 powershell，使用以下命令确认是否能够访问开发板：`ping 192.168.127.10`。

## 启动 RDK X5 Magicbox

上电后等待大约 50s，白灯依次亮起，最后白灯闪烁，听到启动音效则说明启动成功。

## 示例体验

使用如下命令设置应用自启动开关，设置为开启时开机自启动应用，默认已开启。
```Shell
#自启动开启
systemctl enable magicbox-start

#自启动关闭
systemctl disable magicbox-start
```

:::warning 注意
  本文所述按钮从左到右方向均为 RDK X5 Magicbox 灯带面向用户时的方向。
:::

### 双目深度估计

1. 短按最左边按钮，灯光变为红色，双目深度估计算法启动。
2. 算法效果查看方法：
    - 使用闪连配置网络时浏览器访问 http://192.168.128.10:8000 。
    - 使用有线网口配置网络时浏览器访问 http://192.168.127.10:8000 。    

    ![双目深度估计](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Depth-Estimation.png)

### 手势交互

1. 短按中间按钮，灯光变为绿色，手势交互算法启动。
2. 手部动作及触发动作说明：

    <table>
      <thead>
        <tr align="left">
          <th>手势</th>
          <th>手部动作</th>
          <th>触发动作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ThumbUp</td>
          <td>竖起大拇指</td>
          <td>摇臂摇晃</td>
        </tr>
        <tr>
          <td>Victory</td>
          <td>"V"手势</td>
          <td>摇臂撑起</td>
        </tr>
        <tr>
          <td>ThumbLeft</td>
          <td>大拇指向左</td>
          <td>举起左摇臂</td>
        </tr>
        <tr>
          <td>ThumbRight</td>
          <td>大拇指向右</td>
          <td>举起右摇臂</td>
        </tr>
        <tr>
          <td>Okay</td>
          <td>OK手势</td>
          <td>灯光闪烁</td>
        </tr>
      </tbody>
    </table>

3. 算法效果查看方法：
    - 使用闪连配置网络时浏览器访问 http://192.168.128.10:8000 。
    - 使用有线网口配置网络时浏览器访问 http://192.168.127.10:8000 。


      ![手势交互](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Gesture.png)

### 语音交互

:::warning 注意
  建议在较为安静环境中使用，否则容易接收周围其他声音。
:::

1. 短按最右边按钮，灯光变为蓝色，出现语音提示 “你好，请问有什么可以帮助你的吗” 后，即可开始对话。
2. 语音指令：
    - 通过 “结束对话” 语音指令使 RDK X5Magicbox 进入休眠状态，灯光变为呼吸灯模式。
    - 通过 “你好地瓜” 语音指令唤醒，灯光常亮，唤醒后可进行对话。
      :::warning 
      
      需注意偶尔会出现识别错误的情况。

      :::
3. 语音交互流程：
    - 接收到语音输入后，麦克风关闭，蓝灯逐个增亮，扬声器等待播报大模型输出。
    - 语音播报完成后，麦克风开启，蓝灯常亮无变化，可以开始新一轮对话基础使用。

      ![语音交互](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/audio-io.png)

### 使用 RDK Studio 体验更多示例

使用 RDK Studio 工具连接 Magicbox， 可体验更多示例应用模块中的示例，下载安装及使用步骤参考 [RDK Studio 使用指南](https://developer.d-robotics.cc/rdk_doc/RDK_Studio) 。

## 资源监控

上电后自启动资源监控功能，可查看 CPU，BPU 等资源消耗情况，查看方法如下：
- 使用闪连配置网络时浏览器访问 http://192.168.128.10:7999 。
- 使用有线网口配置网络时浏览器访问 http://192.168.127.10:7999 。

![资源监控](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/performance.png)

