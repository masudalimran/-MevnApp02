const state = {
  productList: [],
  none: ''
};
const getters = {
    allProducts: (state) => state.productList
};
const actions = {
    async getProducts({commit}){
        const newProductsData = [
            {
                id: "1",
                name: "IPhone 11 Pro",
                categoryId: 1,
                category: "Phone",
                desc: "iphoe 11 pro back Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 599,
                imgSrc:
                  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
                inCart: false,
              },
              {
                id: "2",
                name: "Huawei 412x",
                categoryId: 1,
                category: "Phone",
                desc: "Huawei Huawei Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 1000,
                imgSrc:
                  "https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg",
                inCart: false,
              },
              {
                id: "3",
                name: "Nike Shirt",
                categoryId: 4,
                category: "Jacket",
                desc: "red nike shirt Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 12,
                imgSrc:
                  "https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Nike-SB-Cat-Scratch-Dri-Fit-T-Shirt-_228887-front.jpg",
                inCart: false,
              },
              {
                id: "4",
                name: "Temperland shirt",
                categoryId: 6,
                category: "T-Shirt",
                desc: "black templerland shirt Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 20,
                imgSrc:
                  "https://tshirtclassic.com/wp-content/uploads/2018/12/Timberland-City-Champion-Sweatshirt.jpg",
                inCart: false,
              },
              {
                id: "5",
                name: "Addidas shirt",
                categoryId: 6,
                category: "T-Shirt",
                desc: "Addidas wight shirt Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 13,
                imgSrc:
                  "https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg",
                inCart: false,
              },
              {
                id: "6",
                name: "Nike shoe",
                categoryId: 9,
                category: "Shoe",
                desc: "Black nike shose Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 50,
                imgSrc:
                  "https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682",
                inCart: false,
              },
              {
                id: "7",
                name: "Nikon Camera",
                categoryId: 3,
                category: "Camera",
                desc: "Nikon camera description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 2400,
                imgSrc:
                  "https://cf2.s3.souqcdn.com/item/2016/03/12/10/26/19/09/item_XL_10261909_12928836.jpg",
                inCart: false,
              },
              {
                id: "8",
                name: "Samsong Watch",
                categoryId: 5,
                category: "Watch",
                desc: "samsong Glaxey Watch Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 5,
                imgSrc:
                  "https://cf5.s3.souqcdn.com/item/2019/02/28/46/26/02/31/item_XL_46260231_48c76cd7e46fe.jpg",
                inCart: false,
              },
              {
                id: "9",
                name: "Macbook Pro",
                categoryId: 2,
                category: "Laptop",
                desc: "Very nice Laptop Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 599,
                imgSrc:
                  "https://images-na.ssl-images-amazon.com/images/I/71jG+e7roXL._AC._SR360,460.jpg",
                inCart: false,
              },
              {
                id: "10",
                name: "Core i5 Laptop",
                categoryId: 2,
                category: "Laptop",
                desc: "Huawei Laptop Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 1000,
                imgSrc:
                  "https://cdn.vox-cdn.com/thumbor/lRwetR_dg8WBLFIUPzY7l0QYCaI=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22411713/cfaulkner_20210326_4491_0006.jpg",
                inCart: false,
              },
              {
                id: "11",
                name: "Flower Vase 1",
                categoryId: 7,
                category: "Flower Vase",
                desc: "White Flower vase Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 12,
                imgSrc:
                  "https://media.istockphoto.com/photos/tulip-bouquet-in-a-vase-isolated-picture-id160912029?k=20&m=160912029&s=612x612&w=0&h=YCsOhEQpkNZ_GzdbYszntOB1KDnUO2P3BVPOaIOveD4=",
                inCart: false,
              },
              {
                id: "12",
                name: "Flower vase 2",
                categoryId: 7,
                category: "Flower Vase",
                desc: "Red flower vase Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 20,
                imgSrc:
                  "https://static-01.daraz.com.bd/p/31d7e86a6b60785ba7b2540159865446.jpg",
                inCart: false,
              },
              {
                id: "13",
                name: "Panasonic Rice Cooker",
                categoryId: 8,
                category: "Cookeries",
                desc: "Blue Rice cooker Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 13,
                imgSrc:
                  "https://www.mke.com.bd/pub/media/catalog/product/cache/34a90cddec6fe65108e6e12543ab3753/m/k/mkelectronics_kitchen_appliances_panasonic_rice_cooker_sr3na_001.jpg",
                inCart: false,
              },
              {
                id: "14",
                name: "Electra Rice cooker",
                categoryId: 8,
                category: "Cookeries",
                desc: "Steel rice cooker Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 50,
                imgSrc:
                  "https://www.electrabd.com/wp-content/uploads/2020/11/DSC_6887-560x420.jpg",
                inCart: false,
              },
              {
                id: "15",
                name: "Nikon Camera 2",
                categoryId: 3,
                category: "Camera",
                desc: "nikon camera description 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 2400,
                imgSrc:
                  "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8u4h56I3YwHLAQ4G0XzTY4Dg==/Views/1590_D3500_front.png",
                inCart: false,
              },
              {
                id: "16",
                name: "Sony Camera",
                categoryId: 3,
                category: "Camera",
                desc: "Steel camera by sony Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 500,
                imgSrc:
                  "https://www.sony-asia.com/image/b2e494fbba7667cdbe3dbd60e7f7ff50?fmt=jpeg&wid=1160&qlt=43",
                inCart: false,
              },
            ]
            //   In Real world We use Json Response from http server
        commit('setProducts', newProductsData)
    },
    async getProductsById({commit}, ID){
        let itemIndex = state.productList.filter(x => x.id == ID)
        commit('none')
        return itemIndex
    },    
};
const mutations = {
    // work with productsList
    setProducts: (state, newProductsData) => (state.productList = newProductsData),
    
    // Does Not Do Anything
    none: (state)=> 
    (state.none, '' )
};

export default {
  state,
  getters,
  actions,
  mutations,
};
