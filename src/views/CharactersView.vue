<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useCharacterStore } from '@/stores/CharacterStore'
  import BaseCharacter from '@/components/BaseCharacter.vue'

  const characterStore = useCharacterStore()
  characterStore.getCharacters()

  const { characters } = storeToRefs(characterStore)
</script>

<template>
  <div class="character-list">
    <RouterLink
      v-for="character in characters?.results"
      :key="character.id"
      :to="{ name: 'character', params: { id: character.id } }"
      class="character-card"
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

<style lang="scss" scoped>
  .character-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
</style>