import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import Main from "../components/home/Main.vue";
import SingleProduct from "../components/products/SingleProduct.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/product",
      name: "SingleProduct",
      component: SingleProduct,
    },
  ],
});
