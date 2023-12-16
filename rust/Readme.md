# 🌀 Mandelbrot Set 🌀

## Overview

The Mandelbrot Set is a Rust-based application that uses the **wgpu** and **winit** libraries to render and interact with the famous Mandelbrot Set. This documentation will provide an overview of the code, its functionality, and the shaders involved in producing captivating Mandelbrot Set visualizations.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Shader Explanation](#shader-explanation)
4. [Interactivity](#interactivity)

## 1. Getting Started <a name="getting-started"></a>

### Dependencies

Before running the application, ensure you have the following dependencies installed:

- Rust programming language
- Rust dependencies specified in `Cargo.toml`
- Vulkan or Metal-supported GPU

### Running the Application

To run the application, execute the following commands in your terminal:

```shell
$ cargo build --release
$ cargo run
```

## 2. Features <a name="features"></a>

### Real-time Visualization

- 🌀 Real-time rendering of the Mandelbrot Set.
- 🌈 Colorful visualization based on the Mandelbrot fractal.

### Zoom and Pan

- 🔍 Zoom in and out with mouse input.
- 📌 Pan the Mandelbrot Set to explore different regions.

### Adaptive Resolution

- 🖥️ Automatically adjusts rendering resolution upon window resizing.
- 🔄 Redraws the Mandelbrot Set with the updated resolution.

## 3. Shader Explanation <a name="shader-explanation"></a>

The Mandelbrot Set visualization relies on two shaders, **vertex shader** and **fragment shader**, which are responsible for rendering the fractal.

### Vertex Shader (vs_main)

- 🎯 Calculates the position of vertices in normalized device coordinates.
- 🧩 Transforms vertex positions.

### Fragment Shader (fs_main)

- 🖌️ Generates colors for each fragment using the Mandelbrot algorithm.
- 🌟 Iteratively calculates the Mandelbrot fractal and assigns colors based on iterations.

## 4. Interactivity <a name="interactivity"></a>

### Zoom and Pan

- 🖱️ Left-click and drag to zoom in/out.
- 🌍 Pan the Mandelbrot Set by moving the mouse.
