const state = {
  menuList: [
    {
      title: "Login",
      route: "login",
    },
    {
      title: "Register",
      route: "register",
    },
    {
      title: "Cart",
      route: "cart",
    },
    {
      title: "Admin",
      route: "admin",
    },
    {
      title: "Profile",
      route: "profile",
    },
    {
      title: "Contact Us",
      route: "contact",
    },
  ],
};

const getters = {
  fetchMenus: (state) => state.menuList,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
