<template lang="html">
  <div fluid class="teal lighten-3">
    <HeaderLayout></HeaderLayout>
      <v-container fluid>
        <router-view/>
      </v-container>
    <FooterLayout/>
    <Navigation/>
  </div>
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
.contain {
  padding-bottom: 0px !important;
}
</style>
