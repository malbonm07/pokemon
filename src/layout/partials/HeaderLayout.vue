<template lang="html">
  <v-container>
    <v-toolbar app class="teal lighten-4">
      <v-toolbar-side-icon @click="openNavigation()"></v-toolbar-side-icon>
      <v-toolbar-title>POKEDEX</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link :to="{path: '/'}" style="color: black; text-decoration: none; padding: 20px 10px 20px 10px;">Search</router-link>
        </v-btn>
        <v-btn flat>
          <router-link :to="{path: '/list'}" style="color: black; text-decoration: none; padding: 20px 10px 20px 10px;">List</router-link>
        </v-btn>
        <v-btn flat>
          <router-link :to="{path: '/about'}" style="color: black; text-decoration: none; padding: 20px 10px 20px 10px;">About</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
      open: false,
    }),
    methods: {
      openNavigation() {
        this.$bus.$emit('openNavigation')
      }
    }
  }
</script>

<style>

</style>
