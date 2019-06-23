<template lang="html">
    <v-card v-if="this.pokeObject" class="orange lighten-1">
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
        <v-btn flat>DESCRIPTION</v-btn>
        <!-- <v-btn flat color="purple">Explore</v-btn> -->
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon @click="show = !show">{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-slide-y-transition>
        <v-card-text v-show="show" class="orange darken-2">
          <v-layout row wrap justify-center align-center>
            <v-flex xs12>
              <v-progress-linear
                :color="color"
                height="20"
                :value="valor"
                style="text-align: center;"
              >
                Base Exp. {{this.pokeObject.base_experience}}
              </v-progress-linear>
            </v-flex>
            <v-flex xs4 align-self-start>
              <v-list-tile-content>
                <v-list-tile-title class="body-2">Abilities:</v-list-tile-title>
                <v-list-tile-sub-title v-for="abilitie in this.pokeObject.abilities">
                  {{abilitie.ability.name}}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-flex>
            <v-flex xs4>
              <v-list-tile-content>
                <v-list-tile-title class="body-2">Stats:</v-list-tile-title>
                <v-list-tile-sub-title v-for="stat in this.pokeObject.stats">
                  {{stat.stat.name}} <span style="font-weight: bold;">{{stat.base_stat}}</span>
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-flex>
            <v-flex xs4 align-self-start>
              <v-list-tile-content>
                <v-list-tile-title class="body-2">Type:</v-list-tile-title>
                <v-list-tile-sub-title>
                  {{this.pokeObject.types[0].type.name}}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-flex>
          </v-layout>
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
    }
  },
  data: () => ({
    show: false,
    color1: "warning"
  }),
  computed: {
    color() {
      if (this.pokeObject.base_experience < 110) return 'error'
      if (this.pokeObject.base_experience > 110 && this.pokeObject.base_experience < 190) return 'primary'
      if (this.pokeObject.base_experience > 190) return 'success'
    },
    valor() {
      if (this.pokeObject.base_experience < 110) return '35'
      if (this.pokeObject.base_experience > 110 && this.pokeObject.base_experience < 190) return '70'
      if (this.pokeObject.base_experience > 190) return '100'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
