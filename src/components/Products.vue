<script setup lang="ts">
import type { IProduct } from "@/models/IProduct";
import Product from './Product.vue';

interface ProductsProp {
  products: IProduct[];
}

defineProps<ProductsProp>();



const emit = defineEmits<{
  (e: "handleBuy",
    id: number): void;
}>();

const handleBuy = (id: number) => {
  //console.log(id + "test products.vue");

  emit("handleBuy", id)
  }



</script>

<template>
<section class="productContainer">
  <Product v-for="product in products" :key="product.id" :product="product" @buy="handleBuy(product.id)" />
</section>
</template>

<style scoped>
.productContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
}
</style>
