---
sidebar_position: 3
---

# Voice Interaction

:::info Code Address
  - Audio stream processing code: https://github.com/D-Robotics/magicbox_audio_io
  - Large language model code: https://ithub.com/D-Robotics/magicbox_qwen_llm
:::

## Function Description
  1. This feature includes an audio processing node and a voice large language model (LLM) node. The LLM uses [Qwen2.5-1.5B](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF). ASR is implemented based on [SensorVoice](https://developer.d-robotics.cc/rdk_doc/en/Robot_development/boxs/audio/sensevoice_ros2), while TTS and KWS are implemented using the [Sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) framework.

  2. In addition to the default continuous conversation mode, it also supports a keyword wake-up mode ("one wake-up, one dialogue"). Users can either say "你好地瓜" to trigger a single round of conversation or directly ask a question by saying "你好地瓜 + [question]". Upon detecting "你好地瓜" the device's lights will flash. This mode can be toggled via the `continuous_wake_mode` parameter in `audio_io.launch.py`.

  3. Besides the default voice conversation capability, voice control is also supported. However, enabling this feature adds a significant number of additional prompts, resulting in longer loading times. Refer to the `enable_function_call` parameter in `qwen_llm.launch.py` for configuration. After startup, commands such as “举起右手”、“右手举到最高”、“站起来”、“坐下” can be used for control.

  4. Due to the lengthy initialization time of the audio processing node, this node starts automatically upon boot. The physical button only controls the start/stop of the large language model node; however, both nodes wait for each other to be ready before beginning operation.

  5. Functional architecture diagram:
      ![Functional Architecture Diagram](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Audio-Architecture-Diagram.png)