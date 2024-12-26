<script setup lang="ts">
defineProps({
  text: String,
  link: String
})
</script>

<template>
  <RouterLink :to="link || ''">
    <button type="button" class="border-2 p-2 font-robotoslab transition-all duration-300 text-black hover:text-white text-xl">
      {{ text }}
    </button>
  </RouterLink>
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
