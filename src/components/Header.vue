<script setup lang="ts">
import HeroDots from '@/components/HeroDots.vue'
</script>

<template>
  <div class="hero flex flex-col gap-5 items-center justify-center text-center text-white h-screen w-full bg-cover bg-blend-difference">
    <h1 class="text-5xl font-semibold font-robotoslab justify-end block">Ajay Quirk</h1>
    <hero-dots/>
    <div class="frame-border top"/>
    <div class="frame-border right"/>
    <div class="frame-border bottom"/>
    <div class="frame-border left"/>
  </div>
</template>

<style scoped>
.frame-border {
  position: absolute;
  background-color: white;
}

.frame-border.top {
  height: 5px;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 40px;
}

.frame-border.right {
  width: 5px;
  top: 0;
  bottom: 0;
  right: 0;
  margin-right: 40px;
}

.frame-border.bottom {
  height: 5px;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 40px;
}

.frame-border.left {
  width: 5px;
  top: 0;
  bottom: 0;
  left: 0;
  margin-left: 40px;
}
</style>
