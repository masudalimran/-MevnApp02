<template>
  <v-app-bar app color="info" dark>
    <router-link :to="{ path: '/' }" class="">
      <v-img src="../../assets/logo.jpg" max-height="60" max-width="100" />
    </router-link>
    <v-spacer></v-spacer>
    <v-list class="d-flex justify-center">
      <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.route">
        <v-list-item-title class="black--text font-weight-bold">
          {{ menu.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      menus: [],
    };
  },
  computed: mapGetters(["fetchMenus"]),
  created() {
    this.menus = this.fetchMenus;
  },
};
</script>

<style lang="sass" scoped>
.v-sheet.v-list
    border-radius: 0
    background: none
.v-toolbar__title
    font-family: cursive
    text-transform: uppercase
</style>