<template>
  <v-container class="px-0" fluid>
    <v-list dense>
      <h2 class="mb-4">Categories</h2>
      <v-btn depressed color="error" class="mb-4 mt-0 ml-5" @click="resetPage()"
        >Reset</v-btn
      >
      <v-list-item v-for="cat in categoriesList" :key="cat.id">
        <v-checkbox
          :label="cat.name"
          @change="category_check(cat.id)"
          class="ma-0 pa-0"
        ></v-checkbox>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Categories",
  data() {
    return {
      categoriesList: [],
    };
  },
  computed: mapGetters(['categoryAssigned']),
  methods: {
    category_check(cat_id) {
      this.$emit("checkCategory", cat_id);
    },
    resetPage() {
      location.reload();
    },
  },
  created(){
    this.categoriesList = this.categoryAssigned
  }
};
</script>

<style lang="sass" scoped>
h2
  text-decoration: underline
</style>