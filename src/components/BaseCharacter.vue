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
  <div
    class="card"
    style="max-width: 300px;"
  >
    <img
      :src="props.image"
      class="card-img-top"
      :alt="props.name"
    >
    <div class="card-body">
      <h5 class="card-title">
        {{ props.name }}
      </h5>
      <small>{{ props.status }} - {{ props.species }}</small>
      <p class="card-text mb-0">
        Last known location:
      </p>
      <p class="card-text">
        {{ props.locationName }}
      </p>
    </div>
  </div>
</template>