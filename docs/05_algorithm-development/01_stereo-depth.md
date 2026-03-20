---
sidebar_position: 1
---

# 双目深度估计


地瓜双目深度估计算法输入为双目图像数据，输出为左视图对应的视差图和深度图。算法借鉴 IGEV 网络，采用了 GRU 架构，具有较好的数据泛化性和较高的推理效率。

:::info 仓库地址
  - 双目深度估计：https://github.com/D-Robotics/hobot_stereonet/tree/magicbox-v1.0.0
  - 双目相机功能：https://github.com/D-Robotics/magicbox_mipi_cam
  - WEB端渲染：https://github.com/D-Robotics/hobot_websocket
:::

:::tip IP 地址说明

- 使用闪连配置网络时 IP 为 http://192.168.128.10 。
- 使用有线网口配置网络时 IP 为 http://192.168.127.10 。

:::

## 硬件型号说明
- 双目相机型号：GS130WI
- 图像传感器型号：SC132GS

## 模型版本

模型版本如下，默认使用 V2.4_int8。

<table>
  <thead>
    <tr>
      <th width="90px">平台</th>
      <th>算法版本</th>
      <th width="90px">量化方式</th>
      <th>输入尺寸</th>
      <th width="150px">最高帧率（fps）</th>
      <th>模型说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RDK X5</td>
      <td>V2.4_int16</td>
      <td>int16</td>
      <td>640x352x3x2</td>
      <td>15</td>
      <td>当前主版本，高精度深度估计</td>
    </tr>
    <tr>
      <td>RDK X5</td>
      <td>V2.4_int8</td>
      <td>int8</td>
      <td>640x352x3x2</td>
      <td>23</td>
      <td>当前主版本，高帧率深度估计</td>
    </tr>
  </tbody>
</table>


## 功能结构图
    ![功能结构图](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Depth-Estimatio-Architecture-Diagram.png)
  
## 启动步骤

1. 使用以下命令确认相机 I2C 信号正常。

      ```shell
      i2cdetect -r -y 4
      i2cdetect -r -y 6
      ```
      <img 
        src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/camera_test.png" 
        style={{ width: '100%', height: 'auto' }}
      />
      
2. 使用以下命令运行相机，通过网页访问 **[IP]**:8000 查看相机图像和深度估计结果。
  
      ```shell
      cd /userdata/magicbox
      source /opt/tros/humble/setup.bash
      source app/ros_ws/install/setup.bash
      bash app/ros_ws/src/magicbox/hobot_stereonet/script/run_stereo.sh --mipi_rotation 0.0 --stereonet_version v2.4_int8 --camera_info_topic /image_combine_raw/right/camera_info
      ```
      ![执行结果图片](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/camera_result.png)

## 参考资料

- 用户手册：[双目深度算法](https://developer.d-robotics.cc/rdk_doc/Robot_development/boxs/spatial/hobot_stereonet)
- 视频讲解：https://www.bilibili.com/video/BV1KdEjzREMz/?share_source=copy_web&vd_source=deb3551e36cc4b1c1020033ad17c564b 