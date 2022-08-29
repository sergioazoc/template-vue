<script lang="ts" setup>
  const props = withDefaults(defineProps<{
    type: "text" | "email" | "password",
    placeholder: string,
    validFeedback?: string | false,
    invalidFeedback?: string | false
  }>(),{
    type: "text",
    validFeedback: false,
    invalidFeedback: false
  })
</script>

<template>
  <div class="input-group has-validation">
    <input
      class="form-control"
      :type="props.type"
      :placeholder="props.placeholder"
      required
    >
    <div
      v-if="props.validFeedback"
      class="valid-feedback"
    >
      {{ props.validFeedback }}
    </div>
    <div
      v-if="props.invalidFeedback"
      class="invalid-feedback"
    >
      {{ props.invalidFeedback }}
    </div>
  </div>
</template>