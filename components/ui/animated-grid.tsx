"use client"

import type React from "react"

import { useMemo } from "react"
import { useVisibleAnimation } from "@/hooks/use-visible-animation"

interface AnimatedGridProps {
  rows?: number
  cols?: number
  cellSize?: string
  animationDuration?: string
  startColor?: [number, number, number]
  endColor?: [number, number, number]
  animationStartColor?: [number, number, number]
  animationEndColor?: [number, number, number]
}

export function AnimatedGrid({
  rows = 6,
  cols = 8,
  cellSize = "4rem",
  animationDuration = "2s",
  startColor = [94, 47, 70],
  endColor = [199, 82, 51],
  animationStartColor = [105, 210, 231],
  animationEndColor = [250, 105, 0],
}: AnimatedGridProps) {
  const animationRef = useVisibleAnimation()
  const totalItems = rows * cols

  // Generate grid items with calculated positions
  const gridItems = useMemo(() => {
    return Array.from({ length: totalItems }, (_, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols

      // Calculate animation delay based on position
      const delay = ((col - row) / cols - 1) * Number.parseFloat(animationDuration)

      // Calculate color interpolation factor
      const k = row / rows

      return {
        index,
        row,
        col,
        delay,
        k,
      }
    })
  }, [rows, cols, totalItems, animationDuration])

  // Color interpolation function
  const interpolateColor = (color1: [number, number, number], color2: [number, number, number], k: number) => {
    const r = Math.round(k * color2[0] + (1 - k) * color1[0])
    const g = Math.round(k * color2[1] + (1 - k) * color1[1])
    const b = Math.round(k * color2[2] + (1 - k) * color1[2])
    return `rgb(${r}, ${g}, ${b})`
  }

  return (
    <div ref={animationRef} className="animated-grid-root min-h-screen flex items-center justify-center p-4">
      <div
        className="grid gap-0"
        style={{
          gridTemplate: `repeat(${rows}, ${cellSize}) / repeat(${cols}, ${cellSize})`,
        }}
      >
        {gridItems.map(({ index, delay, k }) => {
          const cellBackgroundColor = interpolateColor(startColor, endColor, k)
          const animationColor1 = interpolateColor(animationStartColor, animationEndColor, k)

          return (
            <div key={index} className="grid-cell">
              <div
                className="grid-shape"
                style={
                  {
                    background: `linear-gradient(${animationColor1}, ${cellBackgroundColor})`,
                    animationDuration,
                    animationDelay: `${delay}s`,
                  } as React.CSSProperties
                }
              />
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .animated-grid-root { contain: paint; }
        .grid-cell { overflow: hidden; contain: paint; }
        .grid-shape {
          width: 100%; height: 100%; border-radius: 50%;
          animation-name: gridAnimation;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-play-state: var(--ambient-play-state, paused);
        }
        @keyframes gridAnimation {
          from { transform: scale(1); }
          to { transform: scale(1.42); }
        }
      `}</style>
    </div>
  )
}
