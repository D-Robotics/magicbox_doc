---
sidebar_position: 3
---

# 语音交互

:::info 仓库地址
  - 语音流处理代码见：https://github.com/D-Robotics/magicbox_audio_io
  - 语言大模型代码见：https://github.com/D-Robotics/magicbox_qwen_llm
:::

## 功能说明
  1. 该功能包含音频处理节点和语音大模型节点，大模型使用 [Qwen2.5-1.5B](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF)，ASR 基于 [SensorVoice](https://developer.d-robotics.cc/rdk_doc/Robot_development/boxs/audio/sensevoice_ros2) 实现，TTS 与 KWS 基于 [Sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) 框架实现。

  2. 除了默认的持续对话模式外，还支持关键词唤醒模式，即 “一唤醒一对话”，用户可通过 “你好地瓜” 唤醒后进行一轮对话，或通过 “你好地瓜+问题内容” 直接进行对话。检测到 “你好地瓜” 后，灯光会闪烁。可通过 audio_io.launch.py 中的 `continuous_wake_mode` 切换。

  3. 除默认的语音对话功能外，还支持语音控制。但该功能会增加大量额外的 prompt，功能加载时间较久。配置参考 qwen_llm.launch.py 中的 `enable_function_call`，启动后可通过如 “举起右手”、“右手举到最高”、“站起来”、“坐下” 等命令进行控制。

  4. 由于语音处理节点的初始化时间较久，该节点在开机后自动启动，按钮仅控制大语言模型节点的开启关闭，但两个节点会互相等待开启再进行工作。

  5. 功能结构图：
      ![功能结构图](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Audio-Architecture-Diagram.png)
