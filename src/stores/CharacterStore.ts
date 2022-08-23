import { defineStore } from 'pinia'
import * as characterService from '@/services/CharacterService'
import type { Character, Characters } from '@/interfaces/CharacterInterface'

interface State {
  characters: Characters | null,
  character: Character | null
}

export const useCharacterStore = defineStore({
  id: 'character',

  state: (): State => ({
    characters: null,
    character: null
  }),

  getters: {
    
  },

  actions: {
    getCharacter(id: number) {
      this.character = null
      characterService.getCharacter(id)
        .then(character => {
          this.character = character
        })
    },

    getCharacters() {
      this.characters = null
      characterService.getCharacters()
        .then(characters => {
          this.characters = characters
        })
    }
  }
})
