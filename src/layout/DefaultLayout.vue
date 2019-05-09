<template lang="html">
  <v-container fluid app>
    <HeaderLayout></HeaderLayout>
      <v-container>
        <v-layout>
          <h1>dasdsadsa</h1>
        </v-layout>
      </v-container>
    <FooterLayout/>
    <Navigation/>
  </v-container>
</template>

<script>
import HeaderLayout from './partials/HeaderLayout'
import FooterLayout from './partials/FooterLayout'
import Navigation from './partials/Navigation'

export default {
  name: 'DefaultLayout',
  components: {
    HeaderLayout,
    FooterLayout,
    Navigation
  }
}
</script>

<style>
</style>
