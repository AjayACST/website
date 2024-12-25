<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive variables for cursor position
const cursorX = ref(0);
const cursorY = ref(0);

// Variables to track mouse position
let mouseX = 0;
let mouseY = 0;

// Animation loop for smooth cursor movement
const animateCursor = () => {
  const ease = 0.1; // Easing factor for smooth movement
  cursorX.value += (mouseX - cursorX.value) * ease;
  cursorY.value += (mouseY - cursorY.value) * ease;

  requestAnimationFrame(animateCursor);
};

const updateMousePosition = (event: MouseEvent) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
};

onMounted(() => {
  // Add mouse movement listener
  window.addEventListener('mousemove', updateMousePosition);
  animateCursor(); // Start animation loop
});

onUnmounted(() => {
  // Remove mouse movement listener
  window.removeEventListener('mousemove', updateMousePosition);
});
</script>

<template>
  <!-- Custom cursor with an inner and outer circle -->
  <div
    ref="cursor"
    class="custom-cursor-wrapper"
    :style="{ top: `${cursorY}px`, left: `${cursorX}px` }"
  >
    <div class="outer-circle">
      <div class="inner-circle"></div>
    </div>
  </div>
</template>


<style scoped>
.custom-cursor-wrapper {
  position: absolute;
  width: 30px;
  height: 30px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.outer-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inner-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
}



</style>
