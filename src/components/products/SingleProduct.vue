<template>
  <v-container grid-list-xs>
    <v-card class="mx-auto my-12" max-width="50%" elevation="2">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <!-- Image -->
      <v-img
        height="426px"
        width="426px"
        class="ma-auto"
        :src="resultItems.imgSrc"
        :lazy-src="resultItems.imgSrc"
        :alt="resultItems.name"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="gray"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <!-- Image -->

      <!-- Name -->
      <v-card-title class="justify-center text-decoration-underline">{{
        resultItems.name
      }}</v-card-title>
      <!-- Name -->

      <!-- Category -->
      <v-row class="justify-center">
        <v-btn color="primary" text>{{ resultItems.category }}</v-btn>
      </v-row>
      <!-- Category -->

      <!-- Price -->
      <div class="text-subtitle-1 text-center pt-2 red--text">
        Price: ${{ resultItems.price }}
      </div>
      <!-- Price -->

      <!-- Description -->
      <v-row class="justify-center my-2 mx-6">
        <p>{{ resultItems.desc }}</p>
      </v-row>
      <!-- Description -->

      <v-row>
        <v-divider class="mx-4"></v-divider>
      </v-row>
      <v-row class="justify-center">
        <v-btn
          color="red"
          class="mx-2 my-2"
          v-if="resultItems.inCart"
          @click="removeCart()"
          >Remove from cart</v-btn
        >
      </v-row>
      <v-row class="justify-center">
        <v-btn
          color="success"
          class="my-2"
          v-if="!resultItems.inCart"
          @click="addCart()"
          >Add to cart</v-btn
        >
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SingleProduct",
  data() {
    return {
      resultItems: {
        id: "",
        name: "",
        categoryId: null,
        category: "",
        desc: "",
        price: null,
        imgSrc: "",
        inCart: true,
      },
    };
  },
  methods: {
    removeCart() {
      this.resultItems.inCart = false;
    },
    addCart() {
      this.resultItems.inCart = true;
    },
    ...mapActions(["getProductsById"]),
    async getProductByIdData() {
      let productId = this.$route.query.ID;
      await this.getProductsById(productId).then((res) => {
        // console.log(res);
        this.resultItems.id = productId;
        this.resultItems.name = res[0].name;
        this.resultItems.categoryId = res[0].categoryId;
        this.resultItems.category = res[0].category;
        this.resultItems.desc = res[0].desc;
        this.resultItems.price = res[0].price;
        this.resultItems.imgSrc = res[0].imgSrc;
        this.resultItems.inCart = res[0].inCart;
      });
    },
  },
  created() {
    this.getProductByIdData();
  },
};
</script>

<style lang="sass" scoped>
</style>