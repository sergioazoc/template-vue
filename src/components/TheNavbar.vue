<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <RouterLink :to="{ name: 'characters' }">
      List of Characters
    </RouterLink>
  </nav>
</template>

<style lang="scss">
  .navbar {
    background-color: #dddddd;
    padding: 15px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
</style>