const state = {
    categoryList: [
        { id: 1, name: "Phone asdf" },
        { id: 2, name: "Laptop asdf" },
        { id: 3, name: "Camera asdf" },
        { id: 4, name: "Jacket asdf" },
        { id: 5, name: "Watch asdf" },
        { id: 6, name: "T-Shirt asdf" },
        { id: 7, name: "Flower Vase asdf" },
        { id: 8, name: "Cookeries asdf" },
        { id: 9, name: "Shoe asdf" },
    ]
};

const getters = {
    allCategories: (state) => state.categoryList
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
