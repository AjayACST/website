<script setup lang="ts">

import Cursor from '@/components/Cursor.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="overflow-hidden relative">
    <Cursor/>
    <transition :name="$route.meta.transition as string">
      <p :key="$route.name" class="page-header text-white ml-5 font-robotoslab text-3xl">{{ $route.name }}</p>
    </transition>


    <div class="hero flex flex-col gap-5 items-center justify-center text-center text-white h-screen w-full bg-cover bg-blend-difference overflow-hidden">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition as string">
          <component :is="Component"/>
        </transition>
      </router-view>
      <div class="frame-border top"/>
      <div class="frame-border right"/>
      <div class="frame-border bottom"/>
      <div class="frame-border left"/>
    </div>
    <p class="page-num text-white ml-5 font-robotoslab text-3xl">{{ $route.meta.pageNum }}</p>
    <Footer class="page-footer ml-5"/>
  </div>

</template>

<style scoped>
* {
  cursor: none;
}

.page-header {
  position: absolute;
  top: 35px;
  left: 70px;
  transform: translateY(-50%);
}

.page-num {
  position: absolute;
  right: 35px;
  bottom: 35px;
  transform: translate(50%, 50%);
}

.page-footer {
  position: absolute;
  bottom: 35px;
  left: 70px;
  transform: translateY(50%) !important;
}

.frame-border {
  position: absolute;
  background-color: white;
}

.frame-border.top {
  height: 5px;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 70px;
}

.frame-border.right {
  width: 5px;
  top: 0;
  bottom: 0;
  right: 0;
  margin-right: 70px;
}

.frame-border.bottom {
  height: 5px;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 70px;
}

.frame-border.left {
  width: 5px;
  top: 0;
  bottom: 0;
  left: 0;
  margin-left: 70px;
}

/* Slide Right Transition */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 1s ease;
  position: absolute;
  width: 100%;
}

.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
}

/* Slide Left Transition */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 1s ease;
  position: absolute;
  width: 100%;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-left-enter-to,
.slide-left-leave-from {
  transform: translateX(0);
}
</style>
