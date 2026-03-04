---
sidebar_position: 3
---

# 3. 基础外设使用

开发板文件结构如下，/userdata/magicbox/basic_function_demo/ 目录下，预置了基础外设的使用案例，执行程序即可控制相应的外设。

```python
root@ubuntu:/userdata/magicbox# tree -L 2
.
├── app                                #应用功能文件
│   ├── ros_ws                         # ros2 工作空间，基本包含所有应用功能
│   └── Web_RDK_Performance_Node       #资源监控应用
|
├── basic_function_demo                #基础外设使用案例（python）
│   ├── button.py                      #按钮使用脚本
│   ├── imu.py                         # imu 使用脚本
│   ├── servo.py                       #舵机控制脚本
│   └── ws2812b.py                     #灯带控制脚本
|
├── config                             # app 依赖的配置文件
│   └── ......
├── dep                                # app 依赖的第三方功能包
│   ├── llama.cpp                      # llama.cpp
│   ├── matcha-icefall-zh-baker        # TTS 语音模型依赖
│   └── sherpa-onnx                    # sherpa-onnx
|
├── launch                             #启动功能的相关文件
│   ├── lamp                           #启动所需要的灯光控制脚本
│   ├── start.py                       #所有应用功能开启与关闭的控制脚本
│   └── start.sh                       #自启动执行的脚本
|
├── log                                # log文件
|
└── voice                              #音频文件
    ├── robot.mp3
    └── wakeup.mp3
```

## 舵机控制

```python
# 控制两个撑脚往下，将设备撑起，基于 PWM 实现
python3 /userdata/magicbox/basic_function_demo/servo.py
```
![图片](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Steering-Gear.png)

## 灯光控制

```python
# 控制设备灯光亮起，呈现不同颜色，基于SPI实现
python3 /userdata/magicbox/basic_function_demo/servo.py
```

![图片](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/light.png)

## IMU 控制

```python
# 运行 IMU，打印数据，基于 smbus2 实现
python3 /userdata/magicbox/basic_function_demo/imu.py 
```

![图片](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/imu.png)

## 按钮控制

```python
# 运行按钮按压反馈，按压按钮，打印 button1 OK/button2 OK/button3 OK，基于 GPIO 实现
python3 /userdata/magicbox/basic_function_demo/button.py 
```
