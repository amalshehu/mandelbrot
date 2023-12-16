"use client"
import React, { useRef, useEffect, useState } from "react"

export default function Mandelbrot() {
  const canvasRef: any = useRef(null)
  const [magnificationFactor, setMagnificationFactor] = useState(200)
  const [panX, setPanX] = useState(2)
  const [panY, setPanY] = useState(1)

  function isMandelbrotSet(
    cReal: number, cImaginary: number,
    realPart: number = 0, imaginaryPart: number = 0,
    iteration: number = 0, maxIterations: number = 100
  ): number {
    if (iteration >= maxIterations ||
      realPart * realPart + imaginaryPart * imaginaryPart > 4) {
      return iteration
    }
    const newReal = realPart * realPart - imaginaryPart * imaginaryPart + cReal
    const newImaginary = 2 * realPart * imaginaryPart + cImaginary
    return isMandelbrotSet(cReal, cImaginary, newReal, newImaginary, iteration + 1, maxIterations)
  }


  function handleClick(event: any) {
    const { left, top, width, height } = canvasRef.current.getBoundingClientRect()
    const scaleX = canvasRef.current.width / width
    const scaleY = canvasRef.current.height / height

    const newPanX = (event.clientX - left) * scaleX / magnificationFactor - panX
    const newPanY = (event.clientY - top) * scaleY / magnificationFactor - panY

    setPanX(newPanX)
    setPanY(newPanY)
    setMagnificationFactor(magnificationFactor * 1.5)
  }

  function getColor(iteration: number, maxIterations: number): string {
    const hue = (iteration / maxIterations) * 360
    return `hsl(${hue}, 100%, 50%)`
  }


  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const { innerWidth, innerHeight } = window

    canvas.width = innerWidth
    canvas.height = innerHeight

    for (let x = 0; x < innerWidth; x++) {
      for (let y = 0; y < innerHeight; y++) {
        const iteration = isMandelbrotSet(
          x / magnificationFactor - panX,
          y / magnificationFactor - panY
        )
        ctx.fillStyle = iteration === 100 ? "#000" : getColor(iteration, 100)
        ctx.fillRect(x, y, 1, 1)
      }
    }
  }, [panX, panY, magnificationFactor])


  return <canvas ref={canvasRef} onClick={handleClick} />
}
