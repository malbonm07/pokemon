<template lang="html">
  <div>
    <v-layout v-if="this.pokemonsListPreview" wrap justify-center fluid class="">
      <v-flex xs12 sm4 md3 class="pa-2 pokeCard" v-for="(pokemon, index) in this.pokemonsListPreview" :key="index.key">
        <pokeCard :pokeObject="pokemon" :indexPokeObject="index">
        </pokeCard>
      </v-flex>
    </v-layout>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex xs2>
          <div>
            <v-btn depressed large color="primary" @click="seeMore(10)">See More</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import getApi from '@/services/pokemon'
import axios from 'axios'
import pokeCard from '@/components/pokeCard'

export default {
  components: {
    pokeCard
  },
  data: () => ({
    pokemonList: [],
    pokemonsListPreview: [],
    currentList: 11

  }),
  created() {
    //do something after creating vue instance
    for(let i=1; i<=150; i++) {
      getApi.search(i)
      .then(res => {
        let pokemon = res.data
        this.pokemonList.push(pokemon)
        if(i<=10) {
          this.pokemonsListPreview.push(pokemon)
        }
      })
    }
  },
  methods: {
    seeMore(number) {
      let pokemonsToGet = this.pokemonsListPreview.length + number
      if(this.pokemonsListPreview.length < this.pokemonList.length) {
        while(this.currentList<pokemonsToGet) {
          this.pokemonsListPreview.push(this.pokemonList[this.currentList])
          this.currentList ++;
        }
      }
    },
    mostrarCurrentList() {
      console.log(this.currentList)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
