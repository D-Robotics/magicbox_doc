---
sidebar_position: 2
---

# 手势交互

  该功能结合了地瓜的手势识别算法，实现通过手势与 RDK X5 Magicbox 的交互。

  :::info 仓库地址
  - 手势交互：https://github.com/D-Robotics/magicbox_gesture_interaction
  - 相机功能：https://github.com/D-Robotics/magicbox_mipi_cam
  - 人体检测：https://github.com/D-Robotics/mono2d_body_detection
  - 人手关键点检测：https://github.com/D-Robotics/hand_lmk_detection
  - 手势识别：https://github.com/D-Robotics/hand_gesture_detection
  - WEB端渲染：https://github.com/D-Robotics/hobot_websocket
  - 模型推理库：https://github.com/D-Robotics/hobot_dnn/tree/magicbox-v1.0.0
  - 舵机控制库：https://github.com/D-Robotics/magicbox_servo_control
  - 灯光控制库：https://github.com/D-Robotics/magicbox_lighting_control
  :::

:::tip IP 地址说明

- 使用闪连配置网络时 IP 为 http://192.168.128.10 。
- 使用有线网口配置网络时 IP 为 http://192.168.127.10 。

:::
## 模型信息

<table>
  <thead>
    <tr>
      <th>功能</th>
      <th>模型</th>
      <th>输入尺寸</th>
      <th>推理帧率（fps）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>人体检测</td>
      <td>fastrcnn</td>
      <td>1x3x544x960</td>
      <td>125.21</td>
    </tr>
    <tr>
      <td>人手关键点检测</td>
      <td>handLMKs</td>
      <td>8x21</td>
      <td>948</td>
    </tr>
    <tr>
      <td>手势识别</td>
      <td>gestureDet</td>
      <td>8x21</td>
      <td>1252.44</td>
    </tr>
  </tbody>
</table>

## 手部动作及触发动作说明

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

## 功能结构图

![功能结构图](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Gesture-Architecture-Diagram.png)  

## 启动步骤

1. 使用以下命令启动手势交互功能。

    ```bash
      cd /userdata/magicbox
      source /opt/tros/humble/setup.bash
      source app/ros_ws/install/setup.bash
      ros2 launch gesture_interaction gesture_interaction.launch.py
    ```
  
2. 通过网页访问 **[IP]**:8000 查看手势交互结果。

     ![交互结果](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/gesture_result.png)
  
## 参考资料

用户手册：[手势识别](https://developer.d-robotics.cc/rdk_doc/Robot_development/boxs/body/hand_gesture_detection)
  
