<template lang="html">
  <v-container fluid>
    <HeaderLayout></HeaderLayout>
      <router-view/>
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
  },
}
</script>

<style>
</style>
