<script setup lang="ts">
import type { ICart } from '@/models/ICart';



interface CartProp {
  cart: ICart[];
  sum: number;
} 

defineProps<CartProp>();
</script>

<template>

  <h3 class="cartText">
    Antal titlar i Varukorgen: {{ cart.length }}
  </h3>
  <h3 class="cartText cartSum"  >
    Antal filmer totalt i Varukorgen: {{ sum }}
  </h3>
  
</template>


<style scoped>
.cartText {
  margin: 12px;
}

</style>