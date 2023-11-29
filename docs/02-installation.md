# Installation

- You will need Docker and Docker-Compose installed.
- If you want to run OpenDataCam on a NVIDIA GPU you will additonally need
  - [Nvidia CUDA 11 and cuDNN 8](https://developer.nvidia.com/cuda-downloads)
  - [Nvidia Container toolkit installed](https://github.com/NVIDIA/nvidia-docker)
  - You also need to install `nvidia-container-runtime`
- To run OpenDataCam on a NVIDIA Jetson device you will need [Jetpack 5.x](https://developer.nvidia.com/embedded/jetpack-sdk-512).

## As Docker Container (Recommended)

This is the recommended way to install OpenDataCam.
Follow the [Quickstart Guide](/docs/#quickstart)

## Kubernetes

If you prefer to deploy OpenDataCam on Kubernetes rather than with Docker Compose, use the `--orchestrator` flag for changing the engine.

Apart from that, a Kubernetes distribution custom made for the embedded world would be [K3s](https://k3s.io/), which can be installed in 30 seconds by running:

```bash
curl -sfL https://get.k3s.io | sh -
```

Then, to automatically download and deploy the services:

```bash
# Download install script
wget -N https://raw.githubusercontent.com/opendatacam/opendatacam/master/docker/install-opendatacam.sh

# Give exec permission
chmod 777 install-opendatacam.sh

# Install command for Jetson Nano
./install-opendatacam.sh --platform nano --orchestrator k8s

# Install command for Jetson Xavier / Xavier NX
./install-opendatacam.sh --platform xavier --orchestrator k8s

# Install command for a Desktop machine
./install-opendatacam.sh --platform desktop --orchestrator k8s
```

:::note
NVIDIA offers a [Kubernetes device plugin](https://github.com/NVIDIA/k8s-device-plugin) for detecting GPUs on nodes in case you are managing a heterogeneous cluster.
Support for Jetson boards is being worked [here](https://gitlab.com/nvidia/kubernetes/device-plugin/-/merge_requests/20)
:::

## Balena

[![](https://www.balena.io/deploy.png)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/balenalabs-incubator/opendatacam)

If you have a fleet of one or more devices, you can use [balena](https://www.balena.io/) to streamline deployment and management of OpenDataCam.
You can sign up for a free account [here](https://dashboard.balena-cloud.com/signup) and add up to ten devices at no charge.
Use the button below to build OpenDataCam for a Jetson Nano, TX2, or Xavier.
You can then download an image containing the OS, burn it to an SD card, and use balenaCloud to push OpenDataCam to your devices.

You can learn more about this deployment option along with a step-by-step guide in this [recent blog post](https://www.balena.io/blog/using-opendatacam-and-balena-to-quantify-the-world-with-ai/), or [view a screencast](https://www.youtube.com/watch?v=YfRvUeSLi0M&t=44m45s) of the deployment in action.

## Without Docker

See [How to install OpenDataCam without docker](/docs/development/install-without-docker/)