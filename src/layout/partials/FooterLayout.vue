<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with me on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn class="mx-3" dark icon>
          <a href="https://www.facebook.com/malbonm07" target="_blank"><i class="fab fa-facebook-f"></i></a>
        </v-btn>
        <v-btn class="mx-3" dark icon>
          <a href="https://twitter.com/malbonm07" target="_blank"><i class='fab fa-twitter'></i></a>
        </v-btn>
        <v-btn class="mx-3" dark icon>
          <a href="https://www.linkedin.com/in/malbonm07" target="_blank"><i class='fab fa-instagram'></i></a>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong>Malbonm07</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterLayout',
  data: () => ({
  })
}
</script>

<style scoped>
.fab {
  font-size: 25px;
}
a {
  color: white;
}
</style>
