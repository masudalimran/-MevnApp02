import Vuex from 'vuex'
import Vue from 'vue'

import products from './modules/products'
import categories from './modules/categories'
import navbar from './modules/navbar'
import cart from './modules/cart'

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
    modules: {
        products,
        categories,
        navbar,
        cart
    }
})