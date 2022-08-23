<script lang="ts" setup>
  const props = defineProps<{
    name: string,
    image: string,
    status: string,
    locationName: string,
    species: string,
  }>()
</script>

<template>
  <div class="character-card">
    <img
      :src="props.image"
      :alt="props.name"
    >
    <div class="character-content">
      <h3>{{ props.name }}</h3>
      <h5>{{ props.status }} - {{ props.species }}</h5>
      <small>Last known location:</small>
      <h5>{{ props.locationName }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .character-card {
    display: flex;
    align-items: center;
    gap: 30px;
    width: 350px;
    color: #222222;
    border: 1px solid #dddddd;
    
    img {
      width: 100%;
      max-width: 150px;
    }

    .character-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
      * {
        margin: 0;
      }
    }
  }
</style>