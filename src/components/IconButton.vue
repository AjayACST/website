<script setup lang="ts">

import GitHub from '@/components/icons/GitHub.vue'
</script>

<template>
  <button class="border-2 font-robotoslab transition-all duration-300 text-black hover:text-white text-2xl">
    <GitHub class="w-8 h-8"/>
  </button>
</template>

<style scoped>
button {
  background-size: 200% 100%;
  background-image: linear-gradient(to left, var(--primary-colour) 50%, white 50%);
}
button:hover {
  background-position: 100% 0;
  cursor: none;
}
</style>
