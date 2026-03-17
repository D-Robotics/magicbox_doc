---
sidebar_position: 1
---

# 1. Product Overview

The D-Robotics RDK X5 Magicbox is a multimodal intelligent platform integrating vision, hearing, and motion. Powered by the high-performance computing core RDK X5, it integrates a stereo camera, ring-shaped LED light strip, microphone, speaker, and multifunctional movable support legs, enabling natural interaction experiences of "seeing, hearing, speaking, and moving." Whether used for teaching and research, creative development, or intelligent interactive demonstrations, the RDK X5 Magicbox helps users quickly embark on their exploration journey into multimodal artificial intelligence.

![Product View](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/zh/product4.PNG)

## Physical Structure
![Physical Structure Diagram](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Physical-Structure-Diagram.png)

## Interface, Button, and Indicator Light Description
![Interface, Button, and Indicator Light Diagram](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/magicbox/en/Interface-Description.png)


  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Stereo Camera</td>
        <td>Used for image perception and depth information acquisition, supporting application scenarios such as gesture recognition, object localization, and spatial measurement.</td>
      </tr>
      <tr>
        <td>Power Port</td>
        <td>Used to power the Magicbox; please use a power adapter supporting the PD 3.0 protocol.</td>
      </tr>
      <tr>
        <td>Flash Link Port</td>
        <td>Can be used for connection, system flashing, and debugging.</td>
      </tr>
      <tr>
        <td>HDMI Port</td>
        <td>Outputs the Ubuntu desktop to an external display, supporting real-time display of camera feeds and network video streams.</td>
      </tr>
      <tr>
        <td>3.5mm Headphone Jack</td>
        <td>Used for audio input and output.</td>
      </tr>
      <tr>
        <td>Ethernet Port</td>
        <td>Establishes a wired network connection with a host computer for high-speed, stable data communication.</td>
      </tr>
      <tr>
        <td>USB Port</td>
        <td>Used to connect peripherals.</td>
      </tr>
      <tr>
        <td>Speaker Sound Outlet</td>
        <td>Used for audio output.</td>
      </tr>
      <tr>
        <td>Microphone</td>
        <td>Used to receive voice commands.</td>
      </tr>
      <tr>
        <td>Function Buttons and Status LEDs</td>
        <td>Power-on sequence:<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;White LEDs light up sequentially; wait approximately 50 seconds.<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;White LEDs blink accompanied by a sound effect: startup complete.<br/><br/>Function buttons: Launch preset demos. From left to right (facing the user):<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Button 1: Launch stereo depth estimation (LED turns red).<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Button 2: Launch gesture interaction (LED turns green).<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Button 3: Launch voice interaction (LED turns blue).</td>
      </tr>
    </tbody>
  </table>

## Hardware Specifications

### Technical Specifications

- **RDK X5 8G Main Controller**

    The D-Robotics RDK™ X5 is powered by the D-Robotics Sunrise™ 5 intelligent computing chip, delivering up to 10 TOPS of computational performance. It is a versatile development kit designed for intelligent computing and robotics applications, featuring rich interfaces and exceptional ease of use. It supports complex models and cutting-edge algorithms such as Transformer, RWKV, Occupancy, and Stereo Perception, accelerating the rapid deployment of intelligent applications.

      <table>
      <thead>
          <tr>
          <th>Category</th>
          <th  colspan="2">Specification</th>
          </tr>
      </thead>
      <tbody>
          <tr>
          <td rowspan="4">Controller</td>
          <td>Model</td>
          <td>RDK X5 8G</td>
          </tr>
          <tr>
          <td>CPU</td>
          <td>8 x 1.5GHz Arm® Cortex®-A55</td>
          </tr>
          <tr>
          <td>BPU</td>
          <td>1 x Bayes BPU, delivering 10 TOPS (INT8) computational performance</td>
          </tr>
          <tr>
          <td>GPU</td>
          <td>1 x GPU, delivering 32 GFLOPS computational performance</td>
          </tr>
          <tr>
          <td>Memory</td>
          <td colspan="2">8 GB LPDDR4</td>
          </tr>
          <tr>
          <td>Storage</td>
          <td colspan="2">Onboard 1 Gbit NAND flash<br/>microSD card slot supporting UHS-I mode, pre-installed with a 32GB TF card</td>
          </tr>
          <tr>
          <td>Connectivity Interfaces</td>
          <td colspan="2">4 x USB 3.0 Type-A (host)<br/>1 x USB 2.0 Type-C (device)</td>
          </tr>
          <tr>
          <td>Display</td>
          <td colspan="2">1 x HDMI Type-A port, supporting up to 1080p@60fps</td>
          </tr>
          <tr>
          <td>Audio Capability</td>
          <td colspan="2">3.5mm audio jack supporting stereo input and output</td>
          </tr>
          <tr>
          <td>Network Capability</td>
          <td colspan="2">1 x RJ45 port supporting 10/100/1000 Mbps Gigabit Ethernet<br/>2.4/5 GHz dual-band Wi-Fi compliant with IEEE 802.11ax (Wi-Fi 6) standard<br/>Supports Bluetooth® 5.4 protocol<br/>Onboard high-performance antenna</td>
          </tr>
          <tr>
          <td>Power</td>
          <td colspan="2">5V / 5A DC input via Type-C port</td>
          </tr>
      </tbody>
      </table>

- **Integrated D-Robotics Stereo Camera: RDK Stereo Camera GS130WI**

    The RDK™ Stereo Camera GS130WI is a MIPI-interface-based stereo depth camera equipped with dual SC132GS global shutter image sensors and an ICM-42688-P 6-axis IMU, supporting synchronized stereo exposure and external triggering. With a 70 mm baseline, a per-channel resolution of 1280×1080, and a maximum frame rate of 120 fps, it features high dynamic range (HDR), high signal-to-noise ratio (40 dB), and enhanced near-infrared sensitivity at 850/940 nm, making it ideal for robotic vision, machine vision inspection, and motion pose perception applications.

      <table>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Camera Model</td>
            <td>RDK Stereo Camera GS130WI</td>
          </tr>
          <tr>
            <td>Sensor Chip</td>
            <td>SC132GS</td>
          </tr>
          <tr>
            <td>IMU</td>
            <td>ICM-42688-P</td>
          </tr>
          <tr>
            <td>Max Resolution & Frame Rate</td>
            <td>1080×1280@120fps</td>
          </tr>
          <tr>
            <td>FOV</td>
            <td>Diagonal 157.2° / Horizontal 96.8° / Vertical 115.6° ±3°</td>
          </tr>
          <tr>
            <td>Stereo Baseline (mm)</td>
            <td>70</td>
          </tr>
          <tr>
            <td>Max Tilt Angle</td>
            <td>110°</td>
          </tr>
        </tbody>
      </table>

- **Servo Motor: PTK 7465 MG-D**

    The PTK 7465 MG-D servo integrates a high-voltage coreless motor and a high-precision positioner. Its high torque and ±180° operating angle suit diverse application scenarios. The aluminum alloy middle housing significantly enhances reliability and stability.

 
      <table>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Servo Model</td>
            <td>PTK 7465 MG-D</td>
          </tr>
          <tr>
            <td>Angle Range</td>
            <td>±180°</td>
          </tr>
          <tr>
            <td>No-load Speed</td>
            <td>0.11–0.070 sec/60°</td>
          </tr>
          <tr>
            <td>Stall Torque</td>
            <td>3.8–5.8 kg·cm</td>
          </tr>
        </tbody>
      </table>


- **Other Onboard Resources**

    - 4 WS2812B programmable LEDs form the status light, supporting 24-bit full-color display.
    - Equipped with 1 microphone, 1 speaker, and 3 customizable function buttons.

### Packaging and Bare-unit Specifications


  <table>
    <thead>
      <tr>
        <th>Specification</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Outer Packaging</td>
        <td>Nylon knit case with EVA foam insert</td>
      </tr>
      <tr>
        <td>Bare-unit Dimensions (mm)</td>
        <td>162 x 129 x 36.4</td>
      </tr>
      <tr>
        <td>Bare-unit Weight (g)</td>
        <td>517</td>
      </tr>
    </tbody>
  </table>

### Pre-installed Software


  <table>
    <thead>
      <tr>
        <th>System Software</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>RDK OS</td>
        <td>Pre-installed RDK OS, ready to use out of the box for an immediate hands-on experience.</td>
      </tr>
      <tr>
        <td>ROS</td>
        <td>Pre-installed ROS, providing standardized tools and libraries for robotics development.</td>
      </tr>
      <tr>
        <td>Sample Programs</td>
        <td>Pre-installed demos for stereo depth estimation, gesture interaction, and voice interaction.</td>
      </tr>
      <tr>
        <td>Performance Monitoring Application</td>
        <td>Visualizes resource usage directly via a web interface.</td>
      </tr>
    </tbody>
  </table>

## Purchase Channels

<table>
  <thead>
    <tr align="left">
      <th>Sales Channel</th>
      <th>Purchase Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Junpeng Electronic</td>
      <td><a href="https://detail.tmall.com/item.htm?id=1031179821030" target="_blank">Click to Buy</a></td>
    </tr>
  </tbody>
</table>