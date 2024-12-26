<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive variables for cursor position
const cursorX = ref(0);
const cursorY = ref(0);
const isHovering = ref(false); // Track if cursor is over a clickable element
const isClicking = ref(false); // Track if mouse is clicking

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

const updateHoverState = (event: Event) => {
  const target = event.target as HTMLElement;
  // Consider elements like links, buttons, or inputs as clickable
  isHovering.value = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName);
};

// Handle mouse down and up for click effect
const handleMouseDown = () => {
  isClicking.value = true;
};

const handleMouseUp = () => {
  isClicking.value = false;
};

onMounted(() => {
  // Add mouse movement listener
  window.addEventListener('mousemove', updateMousePosition);
  // Start animation loop
  animateCursor();
  // Add listeners for hover state
  window.addEventListener('mouseover', updateHoverState);
  window.addEventListener('mouseout', updateHoverState);
  // Add listeners for click state
  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mouseup', handleMouseUp);
});

onUnmounted(() => {
  // Remove mouse movement listener
  window.removeEventListener('mousemove', updateMousePosition);
  // Remove listeners for hover state
  window.removeEventListener('mouseover', updateHoverState);
  window.removeEventListener('mouseout', updateHoverState);
  // Remove listeners for click state
  window.removeEventListener('mousedown', handleMouseDown);
  window.removeEventListener('mouseup', handleMouseUp);
});
</script>

<template>
  <!-- Custom cursor with an inner and outer circle -->
  <div
    ref="cursor"
    class="custom-cursor-wrapper"
    :class="{ 'hover': isHovering, 'click': isClicking }"
    :style="{ top: `${cursorY}px`, left: `${cursorX}px` }"
  >
    <div class="outer-circle">
      <div class="inner-circle"></div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
  cursor: none; /* Hide the default cursor for the entire page */
}

.custom-cursor-wrapper {
  position: fixed;
  width: 30px;
  height: 30px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  z-index: 50;
}

.custom-cursor-wrapper.hover .inner-circle {
  transform: scale(1.5); /* Enlarge the inner circle on hover */
}

.custom-cursor-wrapper.click .inner-circle {
  transform: scale(0.7); /* Shrink the inner circle on click */
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
  transition: transform 0.2s ease;
}
</style>
