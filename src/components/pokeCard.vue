<template lang="html">
  <v-card v-if="this.pokeObject">
    <v-img
      :src="this.pokeObject.sprites.front_default"
    >
    </v-img>

    <v-card-title primary-title class="text-xs-center">
      <div style="width: 100%;">
        <div class="headline text-xs-center"><h2>{{this.pokeObject.name}}</h2></div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'pokeDetails',
  props: {
    pokeObject: {
      type: Object,
      required: true,
    },
    indexPokeObject: {
      type: Number,
      required: true,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
