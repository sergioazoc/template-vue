<script lang="ts" setup>
  const props = withDefaults(defineProps<{
    type: "text" | "email" | "password",
    placeholder: string
  }>(),{
    type: "text",
  })
</script>

<template>
  <input
    class="form-control"
    :type="props.type"
    :placeholder="props.placeholder"
    required
  >
</template>