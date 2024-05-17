<script setup lang="ts">
import type { IWebshopState } from '@/models/IWebshopState';
import { getProducts } from '@/service/productService';
import { onMounted, ref } from 'vue';
import Cart from './Cart.vue';
import Products from './Products.vue';





const state = ref<IWebshopState>({
  products: [],
  cart: [],
});

const sum = ref<number>(0);

onMounted(async () => {
  state.value.products = await getProducts();
});

const addToCart = (clickedId: number) => {
  const index = state.value.cart.findIndex(
    (cartProduct) => cartProduct.product.id === clickedId
  );
  console.log(index);
  console.log(clickedId)

  if (index < 0) {
    const addedProduct = state.value.products.find((product) => product.id === clickedId);

    state.value.cart.push({ product: addedProduct, quantity: 1 }); 
    sum.value++;
    } else {
    state.value.cart[index].quantity++;
    sum.value++;
    console.log("finns redan i listan")
    console.log(state.value.cart[index].quantity)
  }

 /* 
  //console.log(addedProduct);
  //console.log("test in webshop");
  if(addedProduct) */
};

</script>

<template>
<!--  {{ state.products.length }}       -->           <!--  för kontroll -->
<div class="headerContainer"><h1>Movie webstore</h1></div>
 <Cart class="cart" :sum="sum" :cart="state.cart" />
 <div class="productsContainer">
  <Products class="products" :products="state.products"  @handle-buy="addToCart" />
  </div>
</template>

<style scoped>
.headerContainer {
  display: flex;
  justify-content: center;
  font-size: 5em;
}
.productsContainer {
  display: flex;
  justify-content: center;
}
.cart {
  text-align: center;
}
.products {
  width: 80%;
}
</style>