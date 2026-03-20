---
sidebar_position: 1
---

# Stereo Depth Estimation

The D-Robotics stereo depth estimation algorithm takes stereo image data as input and outputs the disparity map and depth map corresponding to the left view. The algorithm draws inspiration from the IGEV network and adopts a GRU architecture, offering good data generalization and high inference efficiency.

:::info Repository Addresses
  - Stereo Depth Estimation: https://github.com/D-Robotics/hobot_stereonet/tree/magicbox-v1.0.0
  - Stereo Camera Functionality: https://github.com/D-Robotics/magicbox_mipi_cam
  - Web-based Rendering: https://github.com/D-Robotics/hobot_websocket
:::

:::tip IP Address Explanation

- When configuring the network via Flash Connect, the IP address is http://192.168.128.10.
- When configuring the network via the wired Ethernet port, the IP address is http://192.168.127.10.

:::

## Hardware Model Description
- Stereo Camera Model: GS130WI
- Image Sensor Model: SC132GS

## Model Versions

The model versions are listed below. The default version used is 2.4_int8.

<table>
  <thead>
    <tr>
      <th width="90px">Platform</th>
      <th>Algorithm Version</th>
      <th width="90px">Quantization Method</th>
      <th>Input Size</th>
      <th width="150px">Max Frame Rate (fps)</th>
      <th>Model Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RDK X5</td>
      <td>V2.4_int16</td>
      <td>int16</td>
      <td>640x352x3x2</td>
      <td>15</td>
      <td>Current main version, high-precision depth estimation</td>
    </tr>
    <tr>
      <td>RDK X5</td>
      <td>V2.4_int8</td>
      <td>int8</td>
      <td>640x352x3x2</td>
      <td>23</td>
      <td>Current main version, high frame rate depth estimation</td>
    </tr>
  </tbody>
</table>

## Functional Architecture Diagram
    ![Functional Architecture Diagram](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Depth-Estimatio-Architecture-Diagram.png)
  
## Startup Steps

1. Use the following command to confirm the camera's I2C signal is normal.

      ```shell
      i2cdetect -r -y 4
      i2cdetect -r -y 6
      ```
      ![Execution Result Image](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/camera_test.png)

2. Use the following command to run the camera. Access **[IP]**:8000 via a web page to view the camera image and depth estimation results.
  
      ```shell
      cd /userdata/magicbox
      source /opt/tros/humble/setup.bash
      source app/ros_ws/install/setup.bash
      bash app/ros_ws/src/magicbox/hobot_stereonet/script/run_stereo.sh --mipi_rotation 0.0 --stereonet_version v2.4_int8 --camera_info_topic /image_combine_raw/right/camera_info
      ```
      ![Execution Result Image](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/camera_result.png)

## Reference Materials

- User Manual: [Stereo Depth Algorithm](https://developer.d-robotics.cc/rdk_doc/en/Robot_development/boxs/spatial/hobot_stereonet).
- Video Explanation: https://www.bilibili.com/video/BV1KdEjzREMz/?share_source=copy_web&vd_source=deb3551e36cc4b1c1020033ad17c564b .