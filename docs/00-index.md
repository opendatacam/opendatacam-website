---
slug: /
---

# Introduction

Welcome to the OpenDataCam Documentation.
Below is a quickstart guide to get you started with OpenDataCam.
Detailed information on installation options and configuration can be found in the respective subpages.

## Quickstart

The quickest way to get started with OpenDataCam is to use the existing Docker Images.

### Pre-Requesits

- You will need Docker and Docker-Compose installed. 
- If you want to run OpenDataCam on a NVIDIA GPU you will additonally need
  - [Nvidia CUDA 11 and cuDNN 8](https://developer.nvidia.com/cuda-downloads)
  - [Nvidia Container toolkit installed](https://github.com/NVIDIA/nvidia-docker)
  - You also need to install `nvidia-container-runtime`
- To run OpenDataCam on a NVIDIA Jetson device you will need [Jetpack 5.x](https://developer.nvidia.com/embedded/jetpack-sdk-512).

### Installation

```bash
# Download install script
wget -N https://raw.githubusercontent.com/opendatacam/opendatacam/v3.0.2/docker/install-opendatacam.sh

# Give exec permission
chmod 777 install-opendatacam.sh

# Note: You will be asked for sudo password when installing OpenDataCam

# Install command for Jetson Nano
./install-opendatacam.sh --platform nano

# Install command for Jetson Xavier / Xavier NX
./install-opendatacam.sh --platform xavier

# Install command for a Laptop, Desktop or Server with NVIDIA GPU
./install-opendatacam.sh --platform desktop
```

This command will download and start a docker container on the machine.
After it finishes the docker container starts a webserver on port 8080 and run a demo video.

:::note

The docker container is started in auto-restart mode, so if you reboot your machine it will automaticaly start opendatacam on startup.
To stop it run `docker-compose down` in the same folder as the install script.

:::

### Next Steps

Now you can…

- Drag'n'Drop a video file into the browser window to have OpenDataCam analzye this file
- Change the [video input](/docs/configuration/#video-input) to run from a USB-Cam or other cameras
- Use custom [neural network weigts](/docs/configuration/#use-custom-neural-network-weights)

and much more. See [Configuration](/docs/configuration) for a full list of configuration options.

## How accurate is OpenDataCam?

Accuracy depends on which YOLO weights your hardware is capable of running.

We are working on [adding a benchmark](https://github.com/opendatacam/opendatacam/issues/87) to rank OpenDataCam on the [MOT Challenge (Multiple Object Tracking Benchmark)](https://motchallenge.net/)

## How fast is OpenDataCam?

FPS depends on:

- which hardware your are running OpenDataCam on
- which YOLO weights you are using

We made the default settings to run at least at 10 FPS on any Jetson.

Learn more in the [Customize OpenDataCam documentation](documentation/CONFIG.md#Change-neural-network-weights)