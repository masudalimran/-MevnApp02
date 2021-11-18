const state = {
    categoryList: [
        { id: 1, name: "Phone" },
        { id: 2, name: "Laptop" },
        { id: 3, name: "Camera" },
        { id: 4, name: "Jacket" },
        { id: 5, name: "Watch" },
        { id: 6, name: "T-Shirt" },
        { id: 7, name: "Flower Vase" },
        { id: 8, name: "Cookeries" },
        { id: 9, name: "Shoe" },
    ]
};

const getters = {
    Categories: (state) => state.categoryList
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
