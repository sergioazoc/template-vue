<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import BaseInput from '@/components/BaseInput.vue'

  const formData = reactive({
    text: '',
    password: '',
    email: ''
  })

  const validateForm = ref(false)

  const onSubmit = () => {
    console.log(formData)
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
      @input-value="value => formData.text = value"
    />
    <BaseInput
      placeholder="ingresar un password"
      type="password"
      @input-value="value => formData.password = value"
    />
    <BaseInput
      placeholder="ingresar un email"
      type="email"
      @input-value="value => formData.email = value"
    />
    <button class="btn btn-primary">
      enviar
    </button>
  </form>
</template>