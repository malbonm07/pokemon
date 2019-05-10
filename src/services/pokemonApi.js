import pokemonApi from './baseUrlPokemon'
import axios from "axios";

const pokemonService = axios.create({
  baseURL: pokemonApi.apiUrl
})

export default pokemonService
