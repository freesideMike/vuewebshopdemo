<script setup lang="ts">
import type { IProduct } from '@/models/IProduct';

interface ProductProp {
  product: IProduct;
}

const props = defineProps<ProductProp>();

const emit = defineEmits<{
  (e: "buy",
    id: number): void;
}>();

const buy = (id: number) => {
  //console.log(id + "test product");

  emit("buy", props.product.id);
}

</script>

<template>
  <article class="productCard">
    <h3>
      {{ product.name }}
    </h3>
    <section class="imgContainer">

      <img :src="product.imageUrl" :alt="product.name"> 
    </section>
    <p>
      {{ product.price }} kr
    </p>
    <button @click="buy(product.id)" >Köp fimen</button>
  </article>
</template>

<style scoped lang="scss">
.productCard {
  width: 30%;
  border: 1px grey solid;
  border-radius: 4px;
  background-color: rgb(252, 250, 248);
  padding: 18px;
  margin-bottom: 36px;
  transition: transform 400ms;
 
}
.productCard:hover {
   transform: scale(1.05);
   box-shadow: 0px 0px 3px 1px #e50000e0;
 }

.imgContainer {
    width: 100%;
  }
  img {
    width: 100%;
  }

</style>