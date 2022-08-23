<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useCharacterStore } from '@/stores/CharacterStore'
  import BaseCharacter from '@/components/BaseCharacter.vue'

  const characterStore = useCharacterStore()
  characterStore.getCharacters()

  const { characters } = storeToRefs(characterStore)
</script>

<template>
  <div class="d-flex flex-wrap justify-content-center gap-3">
    <RouterLink
      v-for="character in characters?.results"
      :key="character.id"
      :to="{ name: 'character', params: { id: character.id } }"
      class="character-card text-decoration-none text-dark"
    >
      <BaseCharacter
        :name="character.name"
        :image="character.image"
        :status="character.status"
        :species="character.species"
        :location-name="character.location.name"
      />
    </RouterLink>
  </div>
</template>