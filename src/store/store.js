import Vuex from 'vuex'
import Vue from 'vue'

import products from './modules/products'
import categories from './modules/categories'

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
    modules: {
        products,
        categories,
    }
})