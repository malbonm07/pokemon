<template>
  <v-layout
    wrap
    style="height: 200px;"
  >
    <v-container>
      <v-layout justify-center>
        <!-- <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn> -->
      </v-layout>
    </v-container>

    <v-navigation-drawer
      v-model="value"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  name: 'Navigation',
  // props: {
  //   open: {
  //     type: Boolean,
  //     required: true,
  //   }
  // },
  data: () => ({
    value: false,
  }),
  mounted() {
    //do something after mounting vue instance
    this.$bus.$on('openNavigation', () => {
      this.value = !this.value
    })
  }
}
</script>

<style lang="css" scoped>
</style>
