---
sidebar_position: 0
---

# 1. 产品概述

D-Robotics RDK X5 Magicbox 是一款融合视觉、听觉与动觉的多模态智能平台。搭载高性能计算核心 RDK X5，集成双目相机、环形灯带、麦克风、扬声器与多功能可动撑脚，可实现 "看、听、说、动" 的自然交互体验。无论用于教学研究、创意开发，还是智能交互展示，RDK X5 Magicbox 都能帮助用户快速开启多模态人工智能的探索之旅。


![整机图](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/product4.PNG)

:::tip **售卖渠道**

- **隽鹏电子：** [点击购买](https://detail.tmall.com/item.htm?id=1031179821030)
- **亚博智能：** [点击购买](https://detail.tmall.com/item.htm?id=1032993461059)

:::

## 拓扑结构
![物理结构图](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Physical-Structure-Diagram.png)

## 接口、按键与指示灯说明
![接口按键与指示灯说明图](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Interface-Description.png)


  <table>
    <thead>
      <tr>
        <th width="25%">名称</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>双目相机</td>
        <td>用于图像感知以及获取深度信息，支持手势识别、目标定位、空间测量等使用场景。</td>
      </tr>
      <tr>
        <td>电源口</td>
        <td>用于为 Magicbox 供电，请使用支持 PD 3.0 协议的电源适配器。</td>
      </tr>
      <tr>
        <td>闪连口</td>
        <td>可用于连接、烧录系统、调试。</td>
      </tr>
      <tr>
        <td>HDMI 接口</td>
        <td>用于在显示器输出 Ubuntu 系统桌面，支持实时显示摄像头、网络流画面功能。</td>
      </tr>
      <tr>
        <td>3.5mm 耳机接口</td>
        <td>用于音频输入与输出。</td>
      </tr>
      <tr>
        <td>网线接口</td>
        <td>用于与上位机建立有线网络连接，实现高速、稳定的数据通信。</td>
      </tr>
      <tr>
        <td>USB 接口</td>
        <td>用于连接外设。</td>
      </tr>
      <tr>
        <td>扬声器出声孔</td>
        <td>用于声音输出。</td>
      </tr>
      <tr>
        <td>麦克风</td>
        <td>用于接收语音指令。</td>
      </tr>
      <tr>
        <td>功能按键与状态灯</td>
        <td>
              上电后指示灯状态：
              <ul>
                <li>白灯依次亮起，等待大约 50s。</li>
                <li>白灯闪烁并伴随音效：启动完成。</li>
              </ul>
              <br/>
              灯带面向用户时从左到右按键作用及指示灯状态：
              <ul>
                <li>按键1：启动双目深度估计功能，灯光变为红色。</li>
                <li>按键2：启动手势交互功能，灯光变为绿色。</li>
                <li>按键3：启动语音交互功能，灯光变为蓝色。</li>
              </ul>
        </td>
      </tr>
    </tbody>
  </table>

## 硬件规格

### 技术规格

- **RDK X5 8G 主控**

    D-Robotics RDK™ X5 搭载 D-Robotics Sunrise™ 5 智能计算芯片，可提供高达 10 TOPS 的算力，是一款面向智能计算与机器人应用的全能开发套件，接口丰富，极致易用，支持 Transformer、RWKV、Occupancy、Stereo Perception 等多种复杂模型和最新算法，加速智能化应用快速落地。

      <table>
      <thead>
          <tr>
          <th>类别</th>
          <th colspan="2">规格说明</th>
          </tr>
      </thead>
      <tbody>
          <tr>
            <td rowspan="4">控制器</td>
            <td>控制器型号</td>
            <td>RDK X5 8G</td>
          </tr>
          <tr>
            <td>CPU</td>
            <td>8 x Arm Cortex-A55</td>
          </tr>
          <tr>
            <td>BPU</td>
            <td>1 x Bayes BPU，具有10TOPS (INT8) 算力</td>
          </tr>
          <tr>
            <td>GPU</td>
            <td>1 x GPU，具有 32GFLOPS算力</td>
          </tr>
          <tr>
            <td>内存</td>
            <td colspan="2">8 GB LPDDR4</td>
          </tr>
          <tr>
          <td>存储</td>
          <td colspan="2">
            <ul>
              <li>板载 1 Gbit NAND 闪存</li>
              <li>提供 microSD 卡插槽，支持 UHS-I 模式</li>
              <li>预置 32GB TF卡</li>
            </ul>
          </td>
          </tr>
          <tr>
          <td>互联接口</td>
          <td colspan="2">
          <ul>
            <li>4 x USB 3.0 Type-A (主机)</li>
            <li>1 x USB 2.0 Type-C (设备)</li>
          </ul>
          </td>
          </tr>
          <tr>
          <td>显示</td>
          <td colspan="2">1 x HDMI Type-A 接口，最高支持 1080p@60fps</td>
          </tr>
          <tr>
          <td>音频能力</td>
          <td colspan="2">提供 3.5mm 音频插孔，支持立体声输入输出</td>
          </tr>
          <tr>
          <td>网络能力</td>
          <td colspan="2">
          <ul>
            <li>1 x RJ45 接口，支持 10/100/1000 Mbps 千兆以太网</li>
            <li>2.4/5 GHz 双频无线局域网，符合 IEEE 802.11ax (Wi-Fi 6) 标准</li>
            <li>支持 Bluetooth® 5.4 协议</li>
            <li>板载高性能天线</li>
          </ul>
          </td>
          </tr>
          <tr>
          <td>电源</td>
          <td colspan="2">5V / 5A DC 输入，Type-C 接口</td>
          </tr>
      </tbody>
      </table>

- **搭载地瓜机器人双目相机：RDK Stereo Camera GS130WI**

    RDK™ Stereo Camera GS130WI 是一款基于 MIPI 接口的双目深度相机，搭载双颗 SC132GS 全局快门图像传感器与 ICM-42688-P 六轴 IMU，支持双目同步曝光及外部触发。相机基线 70 mm，单路分辨率 1280×1080，最高帧率 120 fps，具备高动态范围（HDR）、高信噪比（40 dB）与 850/940 nm 近红外增强能力，适用于机器人视觉、机器视觉检测及运动姿态感知等应用场景。


      <table>
        <thead>
          <tr>
            <th>规格</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>相机型号</td>
            <td>RDK Stereo Camera GS130WI</td>
          </tr>
          <tr>
            <td>芯片型号</td>
            <td>SC132GS</td>
          </tr>
          <tr>
            <td>IMU</td>
            <td>ICM-42688-P</td>
          </tr>
          <tr>
            <td>最大分辨率&帧率</td>
            <td>1080×1280@120fps</td>
          </tr>
          <tr>
            <td>FOV</td>
            <td>对角 157.2° / 水平 96.8° / 垂直 115.6° ±3°</td>
          </tr>
          <tr>
            <td>双目间距(mm)</td>
            <td>70</td>
          </tr>
          <tr>
            <td>最大翻折角度</td>
            <td>110°</td>
          </tr>
        </tbody>
      </table>

- **舵机：PTK 7465 MG-D**

    PTK 7465 MG-D 搭载高压空心杯电机以及高精度定位器，大扭力及 ±180° 的工作角度能应付多种使用场景；中壳铝合金材质全方位提升了可靠性及稳定性。

      <table>
        <thead>
          <tr>
            <th>规格</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>舵机型号</td>
            <td>PTK 7465 MG-D</td>
          </tr>
          <tr>
            <td>角度范围</td>
            <td>±180°</td>
          </tr>
          <tr>
            <td>空载速度</td>
            <td>0.11–0.070 sec/60°</td>
          </tr>
          <tr>
            <td>堵转扭力</td>
            <td>3.8–5.8 kg·cm</td>
          </tr>
        </tbody>
      </table>

- **其他板载资源**

    - 4 颗 WS2812B 可编程 LED 组成状态灯，支持 24-bit 全彩显示。
    - 配备 1 颗麦克风、1 颗扬声器以及 3 个可自定义功能的按键。


### 包装及裸机规格

  <table>
    <thead>
      <tr>
        <th>规格</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>外包装</td>
        <td>尼龙针织包装，EVA 发泡内托</td>
      </tr>
      <tr>
        <td>裸机尺寸（mm）</td>
        <td>162 x 129 x 36.4</td>
      </tr>
      <tr>
        <td>裸机重量（g）</td>
        <td>517</td>
      </tr>
    </tbody>
  </table>


## 预置软件

  <table>
    <thead>
      <tr>
        <th>系统软件</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>RDK OS</td>
        <td>预置 RDK OS，开箱即可上手体验。</td>
      </tr>
      <tr>
        <td>ROS</td>
        <td>预置 ROS，为机器人开发提供标准化的工具和库。</td>
      </tr>
      <tr>
        <td>程序案例</td>
        <td>预置双目深度估计、手势交互、语音交互案例。</td>
      </tr>
      <tr>
        <td>性能监控应用</td>
        <td>通过网页端直接可视化显示资源占用率。</td>
      </tr>
    </tbody>
  </table>


<style>
{`
/* 针对表格内的无序列表重置样式 */
table ul {
    /* 移除默认缩进（核心：消除二级缩进） */
    padding-left: 20px; /* 一级列表标准缩进，可根据需求调整 */
    margin: 0;          /* 移除默认外边距 */
    list-style-type: disc; /* 强制显示一级列表的实心圆点（默认就是，可显式声明） */
}
table li {
    /* 移除li的默认额外缩进 */
    margin: 0;
    padding: 0;
}
/* 可选：美化表格，方便查看效果 */
table {
    border-collapse: collapse;
    width: 80%;
    margin: 20px;
}
th, td {
    border: 1px solid #ccc;
    padding: 8px;
}`}
</style>
