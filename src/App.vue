<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <div class="container">
    <RouterView />
  </div>
</template>