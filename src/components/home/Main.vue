<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col lg="2">
        <Categories @checkCategory="selectCategory" />
      </v-col>
      <v-col lg="10">
        <v-data-iterator
          :items="items"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-row>
              <v-col lg="3" v-for="item in props.items" :key="item.id">
                <v-card class="mx-auto my-12" max-width="374" elevation="2">
                  <template slot="progress">
                    <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                    ></v-progress-linear>
                  </template>

                  <!-- Image -->
                  <router-link
                    :to="{ path: '/product', query: { ID: item.id } }"
                  >
                    <v-img
                      height="426px"
                      :src="item.imgSrc"
                      :lazy-src="item.imgSrc"
                      :alt="item.name"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="gray"
                          ></v-progress-circular>
                        </v-row> </template
                    ></v-img>
                  </router-link>
                  <!-- Image -->

                  <!-- Name -->
                  <v-card-title class="justify-center">{{
                    item.name
                  }}</v-card-title>
                  <!-- Name -->

                  <!-- Category -->
                  <v-row class="justify-center">
                    <v-btn color="primary" text>{{ item.category }}</v-btn>
                  </v-row>
                  <!-- Category -->

                  <!-- Price -->
                  <div class="text-subtitle-1 text-center pt-2 red--text">
                    Price: ${{ item.price }}
                  </div>
                  <!-- Price -->

                  <!-- Description -->
                  <v-row class="justify-center my-2 mx-6">
                    <p>{{ item.desc.slice(0, 70) }}...</p>
                  </v-row>
                  <!-- Description -->

                  <v-row>
                    <v-divider class="mx-4"></v-divider>
                  </v-row>
                  <v-row class="justify-center">
                    <v-btn
                      color="red"
                      class="mx-2 my-2"
                      @click="removeCart(item.id)"
                      v-if="item.inCart"
                      >Remove from cart</v-btn
                    >
                  </v-row>
                  <v-row class="justify-center">
                    <v-btn
                      color="success"
                      class="my-2"
                      @click="addCart(item.id)"
                      v-if="!item.inCart"
                      >Add to cart</v-btn
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </template>
          <template v-slot:footer>
            <v-row class="mt-2" align="center" justify="center">
              <span class="mr-4 grey--text">
                Page {{ page }} of {{ numberOfPages }}
              </span>
              <v-btn
                fab
                dark
                color="blue darken-3"
                class="mr-1"
                @click="formerPage"
                v-if="page > 1"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                color="blue darken-3"
                class="ml-1"
                @click="nextPage"
                v-if="page < numberOfPages"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>


 
<script>
import Categories from "./Categories.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Main",
  components: {
    Categories,
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 4,
      allcategories: [],
      filteredCategories: [],
      items: [],
      categories: [],
      // Category FIlter
      selectedCategory: [],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    ...mapGetters(["allProducts", "Categories"]),
  },
  methods: {
    // Pagination
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },

    // Category Filter
    selectCategory(cat_id) {
      let checked = this.selectedCategory;
      let filter_cat = this.filteredCategories;

      // Checking if clicked or not
      if (checked.includes(cat_id)) {
        for (var i = 0; i < checked.length; i++) {
          if (checked[i] === cat_id) {
            checked.splice(i, 1);
          }
        }
      } else {
        checked.push(cat_id);
      }

      // Modify DOM with category selection
      if (checked.length === 0) {
        this.items = this.allcategories;
      } else {
        for (let i = 0; i < checked.length; i++) {
          this.items = this.allcategories;
          filter_cat = filter_cat.concat(
            this.items.filter((value) => value.categoryId == checked[i])
          );
          this.items = filter_cat;
        }
      }
    },

    // Add Or Remove to Cart
    removeCart(id) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id === id) {
          this.items[i].inCart = false;
        }
      }
    },
    addCart(id) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id === id) {
          this.items[i].inCart = true;
        }
      }
    },

    // Get Items
    ...mapActions(["getProducts"]),
  },
  mounted() {
    this.getProducts();
    this.allcategories = this.items = this.allProducts;

    // Fetch category from category ID
    this.categories = this.Categories;
    for (var i = 0; i < this.categories.length; i++) {
      for (var j = 0; j < this.allProducts.length; j++) {
        if (this.allProducts[j].categoryId == this.categories[i].id) {
          this.allProducts[j].category = this.categories[i].name;
        }
      }
    }
  },
};
</script>
  
<style lang='sass' scoped>
</style>