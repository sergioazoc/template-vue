import Api from '@/api'
import type { AxiosResponse } from 'axios'
import type { Character, Characters } from '@/interfaces/CharacterInterface'

export const getCharacter = async (id: number) => {
  try {
    const response: AxiosResponse<Character> = await Api.get(`character/${ id }`)
    return response.data
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getCharacters = async () => {
  try {
    const response: AxiosResponse<Characters> = await Api.get(`character`)
    return response.data
  } catch (error) {
    throw new Error(`${error}`)
  }
}