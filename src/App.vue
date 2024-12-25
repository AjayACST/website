<script setup lang="ts">

import Header from '@/components/Header.vue'
import Cursor from '@/components/Cursor.vue'
</script>

<template>
  <Cursor/>
  <Header/>
</template>

<style scoped>
* {
  cursor: none;
  overflow-x: hidden !important;
}
</style>
