<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useCharacterStore } from '@/stores/CharacterStore'
  import BaseCharacter from '@/components/BaseCharacter.vue'

  const route = useRoute()
  const characterStore = useCharacterStore()
  characterStore.getCharacter(Number(route.params.id))

  const { character } = storeToRefs(characterStore)

</script>

<template>
  <BaseCharacter
    v-if="character"
    :name="character.name"
    :image="character.image"
    :status="character.status"
    :species="character.species"
    :location-name="character.location.name"
  />
</template>