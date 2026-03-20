---
sidebar_position: 3
---

# 3. 基础外设使用

开发板文件结构如下，`/userdata/magicbox/basic_function_demo/` 目录下，预置了基础外设的使用案例，执行程序即可控制相应的外设。

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

### 规格说明
舵机型号为 PTK 7465 MG-D，具体参数请参考官方[技术规格说明](../docs/magicbox.md#舵机ptk-7465-mg-d)。 

### PWM 说明
- 舵机通过 PWM 信号控制，连接至 BOARD 管脚 32 和 33，管脚功能参见 [40PIN 管脚定义](https://developer.d-robotics.cc/rdk_doc/Basic_Application/01_40pin_user_sample/40pin_define#40pin_define)。  
- PWM 的使用细节及接口说明，请参阅 [PWM 应用文档](https://developer.d-robotics.cc/rdk_doc/Basic_Application/01_40pin_user_sample/pwm)。

### 执行脚本
使用以下命令执行内置 servo.py 脚本：用于控制两个摇臂下放，触地并撑起机身。

```python
# 控制两个摇臂往下，将设备撑起，基于 PWM 实现
python3 /userdata/magicbox/basic_function_demo/servo.py
```

### 结果展示
![图片](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Steering-Gear.png)

## 灯光控制

### 规格说明

LED 灯型号为 WS2812B，支持 24-bit 全彩显示。

### 接口说明
- 四颗 LED 灯珠通过 SPI 接口控制，连接在 SPI 总线 1 的 0 号设备。
- 有关 SPI 的使用细节及接口说明，请参阅 [SPI 应用文档](https://developer.d-robotics.cc/rdk_doc/Basic_Application/01_40pin_user_sample/spi)。

### 执行脚本
使用以下命令执行内置 ws2812b.py 脚本：用于控制 LED 灯珠亮起并呈现不同颜色。

```python
# 控制设备灯光亮起，呈现不同颜色，基于SPI实现
python3 /userdata/magicbox/basic_function_demo/ws2812b.py
```
### 结果展示
![图片](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/light.png)

## IMU 控制

### 规格说明

双目摄像头自带 IMU，RDK X5 Magicbox 拓展板内置一颗 IMU，拓展板内置 IMU 型号为 ICM20948。

### IMU 通信说明
- 通过 I2C 总线 5 与板载 IMU 通信，使用 smbus2 实现控制逻辑。
- 有关 I2C 的使用细节及接口说明，请参阅 [I2C 应用文档](https://developer.d-robotics.cc/rdk_doc/Basic_Application/01_40pin_user_sample/i2c)。

### 执行脚本
使用以下命令执行内置 imu.py 脚本：运行 IMU 并打印数据。

```python
# 运行 IMU，打印数据，基于 smbus2 实现
python3 /userdata/magicbox/basic_function_demo/imu.py 
```
### 结果展示

<img 
    src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/imu.png" 
    style={{ width: '100%', height: 'auto' }}
/>

## 按钮控制

### 实现逻辑说明

- 按钮逻辑通过 GPIO 实现，连接至 BCM 管脚 22、16 和 26，管脚具体信息见 [40PIN 管脚定义](https://developer.d-robotics.cc/rdk_doc/Basic_Application/01_40pin_user_sample/40pin_define#40pin_define)。

        ![](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/button_PIN.png)

- 按压按钮触发低电平，使用 `GPIO.FALLING` 检测按压事件。
- GPIO 的使用细节及接口说明，请参阅 [GPIO 应用文档](https://developer.d-robotics.cc/rdk_doc/Basic_Application/01_40pin_user_sample/gpio)。

### 执行脚本
使用以下命令执行内置 button.py 脚本：输出按钮按压反馈，按下按钮时打印 button1 OK、button2 OK、button3 OK。

```python
# 运行按钮按压反馈，按压按钮，打印 button1 OK/button2 OK/button3 OK，基于 GPIO 实现
python3 /userdata/magicbox/basic_function_demo/button.py  
```

## 麦克风及扬声器使用

### 规格说明

- 麦克风型号：INMP441
- 功放型号：NS4168

### 接口说明

麦克风与扬声器通过 I2S 接口连接，设备号为 `hw:0, 0`。

### 使用命令

使用以下命令控制麦克风和扬声器：

```shell
# 麦克风录音
arecord -D plughw:0,0 -c 1 -r 16000 -f S16_LE -t wav -d 5 record1.wav
# 扬声器播放
aplay -D plughw:0,0 record1.wav
# mp3 播放
mpg123 -a hw:0,0 /userdata/magicbox/voice/wakeup.mp3
```

