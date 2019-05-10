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

      <v-card-actions>
        <v-btn flat>Share</v-btn>
        <!-- <v-btn flat color="purple">Explore</v-btn> -->
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon @click="show = !show">{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-slide-y-transition>
        <v-card-text v-show="show">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <!-- <v-list-tile-content>
              <v-list-tile-title class="body-2">Abilities:</v-list-tile-title>
              <v-list-tile-sub-title v-for="abilitie in this.pokeObject.abilities">
                {{abilitie.ability.name}}
              </v-list-tile-sub-title>
            </v-list-tile-content> -->
        </v-card-text>
      </v-slide-y-transition>
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
  data: () => ({
    show: false,
  }),
  methods: {
  }
}
</script>

<style lang="css" scoped>
</style>
