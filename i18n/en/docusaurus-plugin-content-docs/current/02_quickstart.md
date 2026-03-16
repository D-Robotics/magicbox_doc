---
sidebar_position: 2
---

# 2. Quick Start

## Precautions

To avoid malfunction or damage to this product, please adhere to the following guidelines:
- Place the product on a stable, flat, and non-conductive surface during use.
- Do not arbitrarily move the swing arm; always return it to its initial position parallel to the housing before use.
- Avoid keeping the servo in a stalled state for an extended period to prevent overcurrent and overheating, which could affect its service life.
- Do not squeeze or twist the camera folding mechanism, and never exceed the maximum folding angle, as this may cause irreversible damage.
- When installing an SD card, remove the protective cover first, and be careful not to insert the SD card into the gap between the housing and the RDK X5.
- Damage caused by connecting incompatible devices to this product will not be covered under warranty or repair support.
- All peripheral devices used with this product must comply with relevant standards in the country of use and be clearly marked to ensure they meet safety and performance requirements.

## Package Contents

- RDK X5 Magicbox with built-in 32GB TF card  
- Cables: A-to-C ×1, C-to-C ×1  

## System Flashing

:::warning Note

The RDK X5 Magicbox comes pre-installed with RDK OS by default. You can refer to the [Quick Start Guide Video](#quick-start-guide-video) to get started directly. If you need to reflash the system, follow the steps below to remove the SD card and proceed with system flashing.

:::

1. Use a screwdriver to unscrew the two screws securing the cover in a counterclockwise direction, then open the SD card cover.
2. Remove the SD card to flash the system. For detailed flashing steps, refer to [System Flashing](https://developer.d-robotics.cc/rdk_doc/en/Quick_start/install_os/rdk_x5).
3. After flashing is complete, reinsert the SD card into the SD card slot inside the Magicbox, reattach the cover, and tighten the two screws to secure it.

    ![System Flashing](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/sd_card_install_os.jpg)

## Quick Start Guide Video

<video controls width="90%" preload="metadata">
  <source src="http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/magicbox-en.mp4" />
  Your browser does not support the video tag.
</video>

## Power Supply

- Type-C port, 5V/5A DC input  
- Power the Magicbox using a power adapter that supports the PD 3.0 protocol via the power port.

## Network Configuration

### Method 1: QuickLink Configuration Instructions

1. On your PC, navigate to **Control Panel → Network and Internet → Network and Sharing Center → Change adapter settings**.
2. Connect your PC to the left-side Flash Link port on the Magicbox.
3. Locate the corresponding Ethernet adapter, right-click it, and select **Properties**.

    :::warning Note
    Please select the correct Ethernet adapter.
    :::

    ![Select Ethernet](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Ethernet-Settings.png)

4. Find and double-click **Internet Protocol Version 4 (TCP/IPv4)**.

    ![Select Internet Protocol Version 4](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Internet-Protocol-Version.png)

5. Enter the corresponding network parameters as shown in the image below, then click **OK**.

    ![Configure Network Parameters](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Network-Parameter-Settings.png)

6. Open PowerShell and run the following command to verify connectivity to the development board: `ping 192.168.128.10`.

### Method 2: Wired Ethernet Port Configuration Instructions

1. On your PC, navigate to **Control Panel → Network and Internet → Network and Sharing Center → Change adapter settings**.
2. Connect your PC to the right-side Ethernet port on the Magicbox.
3. Locate the corresponding Ethernet adapter, right-click it, and select **Properties**.

    :::warning Note
    Please select the correct Ethernet adapter.
    :::

    ![Select Ethernet](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Ethernet-Settings.png)

4. Find and double-click **Internet Protocol Version 4 (TCP/IPv4)**.

    ![Select Internet Protocol Version 4](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Internet-Protocol-Version.png)

5. Enter the corresponding network parameters as shown in the image below, then click **OK**.

    ![Configure Network Parameters](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Network-Parameter-Settings-ethernet.png)

6. Open PowerShell and run the following command to verify connectivity to the development board: `ping 192.168.127.10`.

## Starting the Magicbox

After powering on, wait approximately 50 seconds. The white LEDs will light up sequentially, and successful startup is indicated by the white LED blinking accompanied by a startup sound.

## Example Demonstrations

Use the following command to set the application auto-start switch. When set to ON, the application starts automatically upon boot. It is enabled by default.

```Shell
# Enable auto-start
systemctl enable magicbox-start

# Disable auto-start
systemctl disable magicbox-start
```

:::warning Note
The directions of the buttons described in this article, from left to right, are based on the Magicbox light strip facing the user.
:::

### Stereo Depth Estimation

Press the leftmost button—the indicator light turns red. When configuring the network using QuickLink, access http://192.168.128.10:8000 in your browser, When configuring the network using the wired Ethernet port, access http://192.168.127.10:8000 in your browser to view the effect.

![Stereo Depth Estimation](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Depth-Estimation.png)

### Gesture Interaction

Press the middle button—the indicator light turns green. When configuring the network via QuickLink, access `http://192.168.128.10:8000` in your browser; when configuring via the wired Ethernet port, access `http://192.168.127.10:8000` in your browser to view the effects and interact.

  <table>
    <thead>
      <tr>
        <th>Gesture</th>
        <th>Hand Motion</th>
        <th>Triggered Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ThumbUp</td>
        <td>Thumbs-up</td>
        <td>Ears wiggle</td>
      </tr>
      <tr>
        <td>Victory</td>
        <td>"V" sign</td>
        <td>Feet lift up</td>
      </tr>
      <tr>
        <td>ThumbLeft</td>
        <td>Thumb points left</td>
        <td>Left hand raises</td>
      </tr>
      <tr>
        <td>ThumbRight</td>
        <td>Thumb points right</td>
        <td>Right hand raises</td>
      </tr>
      <tr>
        <td>Okay</td>
        <td>"OK" gesture</td>
        <td>Lights flash</td>
      </tr>
    </tbody>
  </table>


![Gesture Interaction](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/Gesture.png)

### Voice Interaction

:::warning Note
  It is recommended to use in a quiet environment to avoid picking up ambient noise.
:::

Press the rightmost button—the indicator light turns blue. After hearing the voice prompt “你好，请问有什么可以帮助你的吗”, you may begin speaking.

![Voice Interaction](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/audio-io.png)

- **Voice Commands**:
    - Say **“结束对话”** to put the Magicbox into sleep mode; the lights will switch to breathing mode.
    - Say **“你好地瓜”** to wake it up; the lights will stay steadily lit, and you can start a conversation.
    - Note that occasional misrecognition may occur.

- **Voice Interaction Workflow**:
    - After receiving voice input, the microphone turns off, the blue LEDs gradually brighten one by one, and the speaker waits to play the large model’s response.
    - Once audio playback finishes, the microphone reactivates, and the blue LEDs remain steadily lit, ready for the next round of basic interaction.

### Explore More Examples with RDK Studio

Connect the Magicbox using the **RDK Studio** tool to experience additional example applications. For download, installation, and usage instructions, refer to the [RDK Studio User Guide](https://developer.d-robotics.cc/rdk_doc/en/RDK_Studio).

## Resource Monitoring

The resource monitoring feature starts automatically upon power-up. When configuring the network via QuickLink, access `http://192.168.128.10:7999` in your browser; when configuring via the wired Ethernet port, access `http://192.168.127.10:7999` in your browser to view resource consumption such as CPU and BPU.

![Resource Monitoring](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/performance.png)