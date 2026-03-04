---
sidebar_position: 1
---

# Stereo Depth Estimation

The Digicat stereo depth estimation algorithm takes stereo image data as input and outputs the disparity map and depth map corresponding to the left view. The algorithm is inspired by the IGEV network and adopts a GRU architecture, offering strong data generalization capability and high inference efficiency.

- For more details, please refer to: [Stereo Depth Algorithm](https://developer.d-robotics.cc/rdk_doc/en/Robot_development/boxs/spatial/hobot_stereonet)
- Code repository: https://github.com/D-Robotics/hobot_stereonet
- Functional architecture diagram:
  ![Functional Architecture Diagram](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Depth-Estimatio-Architecture-Diagram.png)