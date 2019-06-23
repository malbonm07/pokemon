<template>
 <v-navigation-drawer v-model="value" absolute temporary>
   <v-list class="pt-5" dense>
     <v-divider></v-divider>

     <v-list-tile
       v-for="item in items"
       :key="item.title"
       @click=""
     >
       <v-list-tile-action>
         <v-icon>{{ item.icon }}</v-icon>
       </v-list-tile-action>

       <v-list-tile-content>
         <v-list-tile-title><router-link :to="{path: item.pathLink}" style="color: black; text-decoration: none;">{{ item.title }}</router-link></v-list-tile-title>
       </v-list-tile-content>
     </v-list-tile>
   </v-list>
 </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    value: false,
    items: [
      { title: 'Search', icon: 'dashboard', pathLink: '/' },
      { title: "Pokemon's List", icon: 'list', pathLink: '/list' },
      { title: 'About', icon: 'question_answer', pathLink: '/about' }
    ],
    right: null
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
