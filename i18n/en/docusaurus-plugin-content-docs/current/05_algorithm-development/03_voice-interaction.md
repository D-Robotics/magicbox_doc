---
sidebar_position: 3
---

# Voice Interaction

:::info Models and Repository Links
  - LLM Model: [Qwen2.5-1.5B](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF)
  - ASR Model: [SensorVoice](https://github.com/lovemefan/SenseVoice.cpp)
  - TTS and KWS Models: [Sherpa-onnx](https://k2-fsa.github.io/sherpa/onnx/)
  - Audio Stream Processing: https://github.com/D-Robotics/magicbox_audio_io
  - Large Language Model: https://github.com/D-Robotics/magicbox_qwen_llm
  - Lighting Control Library: https://github.com/D-Robotics/magicbox_lighting_control
:::

## Audio Stream Processing Function Description

:::warning Note

Currently, only Chinese interaction is supported.

:::

1. For instructions on using the voice interaction feature, refer to [Quick Start Voice Interaction](../02_quickstart.md#voice-interaction).
2. In addition to the default continuous conversation mode, it also supports a continuous wake-up mode, i.e., "one wake-up, one conversation."
   - You can wake up the device by saying "Hello, Digua" to initiate a single conversation.
   - You can also directly start a conversation by saying "Hello, Digua + your question."
3. After detecting "Hello Sweet Potato," the light will flash. You can enable or disable the continuous wake-up mode by modifying the `continuous_wake_mode` setting in `/userdata/magicbox/app/ros_ws/src/magicbox/magicbox_audio_io/launch/audio_io.launch.py`.  
   - How to set: Use the script launch command `ros2 launch audio_io audio_io.launch.py continuous_wake_mode:=true`.

             <img 
              src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/continuous_wake_mode.png" 
              style={{ width: '100%', height: 'auto' }}
             />

4. This function is used together with `qwen_llm`, so it will wait for `qwen_llm` to start. If you want to use it independently, you can switch the `wait_for_llm` setting in `/userdata/magicbox/app/ros_ws/src/magicbox/magicbox_audio_io/launch/audio_io.launch.py`.  
   - How to set: Use the script launch command `ros2 launch audio_io audio_io.launch.py wait_for_llm:=false`.

          <img 
            src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/wait_for_llm.png" 
            style={{ width: '100%', height: 'auto' }}
          />
    
5. After the TTS audio playback is complete and the `end` message is received, the microphone will be reactivated (with the light constantly on). The `end` message is primarily used to confirm that the large language model has finished outputting.
6. Due to the long initialization time of the audio processing node, it starts automatically after booting. The button only controls the start and stop of the large language model node, but both nodes will wait for each other to start before functioning.
7. For more parameter details and compilation instructions, refer to the README file in the [code repository](https://github.com/D-Robotics/magicbox_audio_io).

## Large Language Model Function Description

1. The default model path is `/dev/shm/qwen2.5-1.5b-instruct-q5_k_m.gguf`, so the model must be placed in memory first to avoid long initialization times when starting with the button. To change the model path, modify the `llm_model_path` parameter in `/userdata/magicbox/app/ros_ws/src/magicbox/magicbox_qwen_llm/launch/qwen_llm.launch.py`.
2. This functionality package is used by default with `audio_io`, so it will block and wait for the `audio_io` node to start. If you want to use it independently, you can switch it via `wait_for_audio` in `/userdata/magicbox/app/ros_ws/src/magicbox/magicbox_qwen_llm/launch/qwen_llm.launch.py`.
    - Configuration method: Use the script startup command `ros2 launch qwen_llm qwen_llm.launch.py wait_for_audio:=false`.
    
        <img 
          src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/wait_for_audio.png" 
          style={{ width: '100%', height: 'auto' }}
        />
    
3. For more parameter details and compilation instructions, refer to the README file in the [code repository](https://github.com/D-Robotics/magicbox_qwen_llm/tree/develop).

## Functional Architecture Diagram

      <!-- ![Functional Architecture Diagram](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Audio-Architecture-Diagram.png) -->
      <img 
        src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Audio-Architecture-Diagram.png" 
        style={{ width: '100%', height: 'auto' }}
      />

## Startup Steps

1. Use the following command to start audio stream processing.

    ```bash
    # Start audio stream processing
    cd /userdata/magicbox
    source /opt/tros/humble/setup.bash
    source app/ros_ws/install/setup.bash
    ros2 launch audio_io audio_io.launch.py
    ```

    <!-- ![Output Result](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/audio_io.png) -->
    <img 
      src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/audio_io.png" 
      style={{ width: '100%', height: 'auto' }}
    />

2. Open a new terminal and use the following command to start the large language model.

    :::warning
    Please specify the model path `llm_model_path` in `/userdata/magicbox/app/ros_ws/src/magicbox/magicbox_qwen_llm/launch/qwen_llm.launch.py` first.
    :::

    ```bash
    # Start the large language model
    cd /userdata/magicbox
    source /opt/tros/humble/setup.bash
    source app/ros_ws/install/setup.bash
    ros2 launch qwen_llm qwen_llm.launch.py 
    ``` 

    <!-- ![Output Result](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/qwen_llm.png) -->
    <img 
      src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/qwen_llm.png" 
      style={{ width: '100%', height: 'auto' }}
    />