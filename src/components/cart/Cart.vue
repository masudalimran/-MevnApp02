<template>
  <!-- Legend -->
  <v-col>
    <v-row>
      <v-col lg="2" md="2">
        <v-spacer></v-spacer>
      </v-col>
      <v-col lg="5" md="10">
        <v-card-title>Product</v-card-title>
      </v-col>
      <v-col lg="1" md="10">
        <v-card-title>Quantity</v-card-title>
      </v-col>
      <v-col lg="1" md="10">
        <v-card-title>Price</v-card-title>
      </v-col>
      <v-col lg="1" md="10">
        <v-card-title>Total</v-card-title>
      </v-col>
      <v-col lg="2" md="10">
        <v-card-title>Action</v-card-title>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="2" md="2">
        <v-spacer></v-spacer>
      </v-col>
      <v-col lg="9">
        <v-divider></v-divider>
      </v-col>
      <v-col lg="1">
        <v-spacer></v-spacer>
      </v-col>
    </v-row>

    <div v-for="(item, index) in cartItems" :key="item.id">
      <v-row>
        <v-col lg="2">
          <v-spacer></v-spacer>
        </v-col>
        <v-col lg="1" md="10">
          <v-img
            :src="item.imgSrc"
            max-height="50"
            max-width="80"
            contain
          ></v-img
        ></v-col>
        <v-col lg="4" md="10" class="mx-0 px-0">
          <v-list-item-title>
            <strong> {{ item.name }} </strong></v-list-item-title
          >
          <p>{{ item.desc.slice(0, 70) }}...</p>
        </v-col>
        <v-col lg="1" md="10">
          <v-text-field
            hide-details
            single-line
            v-model="quantity[index]"
            type="number"
            dense
            oninput="if(this.value < 1) this.value = 1;"
            class="quantity ml-8"
          />
        </v-col>
        <v-col lg="1" md="10">
          <p class="px-6 green--text">{{ bdCurrency(item.price) }}</p>
        </v-col>
        <v-col lg="1" md="10">
          <p class="px-6 green--text font-weight-bold">
            {{ bdCurrency(totalWithQuantity[index]) }}
          </p>
        </v-col>
        <v-col lg="2" md="10">
          <v-btn color="error">Remove</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="2" md="2">
          <v-spacer></v-spacer>
        </v-col>
        <v-col lg="9">
          <v-divider></v-divider>
        </v-col>
        <v-col lg="1">
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </div>

    <v-row>
      <v-col lg="2" md="2">
        <v-spacer></v-spacer>
      </v-col>
      <v-col lg="7">
        <v-card-title>Total</v-card-title>
      </v-col>
      <v-col lg="3">
        <v-card-title
          >
          {{
            bdCurrency(allTotalWithQuantity)
          }}</v-card-title
        >
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="2" md="2">
        <v-spacer></v-spacer>
      </v-col>
      <v-col lg="9">
        <v-divider></v-divider>
      </v-col>
      <v-col lg="1">
        <v-spacer></v-spacer>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="2" md="2">
        <v-spacer></v-spacer>
      </v-col>
      <v-col lg="7">
        <v-card-title> Continue Shopping</v-card-title>
      </v-col>
      <v-col lg="3">
        <v-btn color="success">Checkout</v-btn>
        <v-card-title></v-card-title>
      </v-col>
    </v-row>
  </v-col>

  <!-- Legend -->
</template>
<script>
import bdCurrency from '../../mixins/bdCurrency'
export default {
  name: "Cart",
  data() {
    return {
      cartItems: [],
      quantity: [],
      totalWithQuantity: [],
      allTotal: 0,
      allTotalWithQuantity: 0,
    };
  },
  watch: {
    quantity() {
      this.allTotalWithQuantity = 0;
      for (var i = 0; i < this.quantity.length; i++) {
        this.totalWithQuantity[i] = this.cartItems[i].price * this.quantity[i];
        this.allTotalWithQuantity += this.totalWithQuantity[i];
      }
    },
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem("cartItem"));

    for (var i = 0; i < this.cartItems.length; i++) {
      this.quantity.push(1);
      this.totalWithQuantity.push(this.cartItems[i].price);
      this.allTotal += this.cartItems[i].price;
    }
  },
  mixins: [bdCurrency]
  
};
</script>

<style lang="sass" scoped>
.quantity
  width: 30px
</style>