<template>
  <v-app>
    <v-app-bar app color="info" dark>
      <router-link :to="{path:'/'}" class="">
        <v-img src="./assets/logo.jpg" max-height="60" max-width="100"/>
      </router-link>
      <!-- <v-toolbar-title>App Component</v-toolbar-title> -->
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    // ...mapGetters(["allProducts"]),
  },
  created() {
    // console.log("App Vue Getters", this.allProducts);
    // this.getProducts();
  },
  methods: {
    // ...mapActions(["getProducts"]),
  },
};
</script>

<style lang="sass" scoped>
.v-toolbar__title
  font-family: cursive
  text-transform: uppercase
</style>
