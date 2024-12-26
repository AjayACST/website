<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue'

interface Dot {
  id: number,
  x: number,
  y: number,
  vx: number,
  vy: number
}

const dots = reactive<Dot[]>([])

const numberOfDots = 50;
const dotSize = 10;
const maxSpeed = 0.5;

const genRandomPosition = (maxWidth: number, maxHeight: number) => {
  return {
    x: Math.random() * maxWidth,
    y: Math.random() * maxHeight,
    vx: (Math.random() - 0.5) * maxSpeed,
    vy: (Math.random() - 0.5) * maxSpeed
  }
}

const updateDots = () => {
  const container = document.querySelector('.hero') as HTMLElement
  if (container) {
    dots.forEach(dot => {
      dot.x += dot.vx;
      dot.y += dot.vy;

      if (dot.x < 0 || dot.x > container.clientWidth - dotSize) dot.vx *= -1
      if (dot.y < 0 || dot.y > container.clientHeight - dotSize) dot.vy *= -1
    })
  }
}

let animationFrameId: number;

const animate = () => {
  updateDots()
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  const container = document.querySelector('.hero') as HTMLElement;
  if (container) {
    for (let i = 0; i < numberOfDots; i++) {
      const position = genRandomPosition(container.clientWidth - dotSize, container.clientHeight - dotSize)
      dots.push({id: i, ...position})
    }
  }
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <div v-for="dot in dots" :key="dot.id" class="dot absolute bg-white rounded-full" :style="{top: `${dot.y}px`, left: `${dot.x}px`, transition: 'top 0.5s ease, left 0.5s ease'}"></div>
</template>

<style scoped>
.dot {
  width: 10px;
  height: 10px;
}
</style>
