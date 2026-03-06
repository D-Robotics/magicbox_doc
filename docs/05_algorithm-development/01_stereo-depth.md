---
sidebar_position: 1
---

# 双目深度估计

地瓜双目深度估计算法输入为双目图像数据，输出为左视图对应的视差图和深度图。算法借鉴 IGEV 网络，采用了 GRU 架构，具有较好的数据泛化性和较高的推理效率。
  - 详细信息可参考：[双目深度算法](https://developer.d-robotics.cc/rdk_doc/Robot_development/boxs/spatial/hobot_stereonet)
  - 代码仓库地址：https://github.com/D-Robotics/hobot_stereonet
  - 功能结构图：
    ![功能结构图](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Depth-Estimatio-Architecture-Diagram.png)
  