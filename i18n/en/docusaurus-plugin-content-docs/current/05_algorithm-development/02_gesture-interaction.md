---
sidebar_position: 2
---

# Gesture Interaction

This feature integrates D-Robotics' gesture recognition algorithm to enable interaction with the RDK X5 Magicbox through hand gestures.

:::info Repository Links
- Gesture Interaction: https://github.com/D-Robotics/magicbox_gesture_interaction
- Camera Functionality: https://github.com/D-Robotics/magicbox_mipi_cam
- Human Detection: https://github.com/D-Robotics/mono2d_body_detection
- Hand Keypoint Detection: https://github.com/D-Robotics/hand_lmk_detection
- Gesture Recognition: https://github.com/D-Robotics/hand_gesture_detection
- Web Rendering: https://github.com/D-Robotics/hobot_websocket
- Model Inference Library: https://github.com/D-Robotics/hobot_dnn/tree/magicbox-v1.0.0
- Servo Control Library: https://github.com/D-Robotics/magicbox_servo_control
- Lighting Control Library: https://github.com/D-Robotics/magicbox_lighting_control
:::

:::tip IP Address Explanation

- When configuring the network via Flash Connection, the IP is http://192.168.128.10.
- When configuring the network via Ethernet, the IP is http://192.168.127.10.

:::

## Model Information

<table>
  <thead>
    <tr>
      <th>Function</th>
      <th>Model</th>
      <th>Input Size</th>
      <th>Inference Frame Rate (fps)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Human Detection</td>
      <td>fastrcnn</td>
      <td>1x3x544x960</td>
      <td>125.21</td>
    </tr>
    <tr>
      <td>Hand Keypoint Detection</td>
      <td>handLMKs</td>
      <td>8x21</td>
      <td>948</td>
    </tr>
    <tr>
      <td>Gesture Recognition</td>
      <td>gestureDet</td>
      <td>8x21</td>
      <td>1252.44</td>
    </tr>
  </tbody>
</table>

## Hand Gestures and Trigger Actions

<table>
  <thead>
    <tr align="left">
      <th>Gesture</th>
      <th>Hand Movement</th>
      <th>Trigger Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ThumbUp</td>
      <td>Thumbs up</td>
      <td>Rocking arm shakes</td>
    </tr>
    <tr>
      <td>Victory</td>
      <td>"V" gesture</td>
      <td>Rocking arm lifts</td>
    </tr>
    <tr>
      <td>ThumbLeft</td>
      <td>Thumb pointing left</td>
      <td>Raise left rocking arm</td>
    </tr>
    <tr>
      <td>ThumbRight</td>
      <td>Thumb pointing right</td>
      <td>Raise right rocking arm</td>
    </tr>
    <tr>
      <td>Okay</td>
      <td>OK gesture</td>
      <td>Light flashes</td>
    </tr>
  </tbody>
</table>

## Functional Architecture Diagram

![Functional Architecture Diagram](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Gesture-Architecture-Diagram.png)

## Startup Steps

1. Use the following command to start the gesture interaction feature.

    ```bash
      cd /userdata/magicbox
      source /opt/tros/humble/setup.bash
      source app/ros_ws/install/setup.bash
      ros2 launch gesture_interaction gesture_interaction.launch.py
    ```

2. Access **[IP]**:8000 via a web browser to view the gesture interaction results.

     ![Interaction Results](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/gesture_result.png)

## Reference Materials

User Manual: [Gesture Recognition](https://developer.d-robotics.cc/rdk_doc/en/Robot_development/boxs/body/hand_gesture_detection)