<template lang="html">
  <v-container fluid>
    <v-layout class="teal pa-5" align-center justify-center>
      <v-flex class="" xs12 sm10>
      <v-text-field
          solo
          label="Buscar Pokemón"
          append-icon="search"
          hide-details
          v-model="pokemonToSearch"
          @keyup.enter = "getPokemon()"
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-container>
      <v-layout v-if="this.pokemons" wrap justify-center fluid class="">
        <v-flex xs12 sm6 md6 class="pa-2 pokeCard">
          <!-- <div  min-width="240px"> -->
            <pokeDetails :pokeObject="pokemonObject">
            </pokeDetails>
          <!-- </div> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import getApi from '@/services/pokemon'
import axios from 'axios'
import pokeDetails from './pokeDetails'

export default {
  name: 'search',
  components: {
    pokeDetails
  },
  data: () => ({
    pokemonToSearch: "",
    pokemons: [],
    pokemonObject: {}
  }),
  methods: {
    getPokemon() {
      // axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokenmonToSearch}`)
      // .then(response => console.log(response))
      getApi.search(this.pokemonToSearch)
      .then(res => {
        this.pokemonObject = res.data
      })
    }
  },
}
</script>

<style lang="css" scoped>
.pokeCard {
}
</style>
