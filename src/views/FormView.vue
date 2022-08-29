<script lang="ts" setup>
  import { ref } from 'vue'
  import BaseInput from '@/components/BaseInput.vue'

  const validateForm = ref(false)

  const onSubmit = () => {
    console.log("form")
    validateForm.value = true
  }
</script>

<template>
  <form
    class="vstack gap-3 needs-validation"
    :class="{ 'was-validated': validateForm }"
    @submit.prevent="onSubmit"
  >
    <BaseInput
      placeholder="ingresar un texto"
      type="text"
      valid-feedback="Texto correcto"
      invalid-feedback="Debes ingresar un texto"
    />
    <BaseInput
      placeholder="ingresar un password"
      type="password"
    />
    <BaseInput
      placeholder="ingresar un email"
      type="email"
    />
    <button class="btn btn-primary">
      enviar
    </button>
  </form>
</template>