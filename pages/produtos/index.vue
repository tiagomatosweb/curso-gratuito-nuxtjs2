<template>
  <div>
    <h1 class="text-lg font-bold">Produtos</h1>
    <NuxtLink to="/produtos/produto-a">Produto A</NuxtLink>
    <NuxtLink to="/produtos/produto-b">Produto B</NuxtLink>
    <br>
    <br>

    <div
      v-for="product in products" :key="product.id"
      class="border-b border-gray-400 py-3"
    >
      {{ product.title }}
    </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni molestias praesentium rem tenetur! Aliquid aperiam at dicta error est eum iste magni minus nihil non quisquam sit, unde voluptate.</p>
  </div>
</template>

<script>
    export default {
        name: '',

        data() {
            return {
            };
        },

       async asyncData({ $axios }) {
         const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=3')
         return {
           products,
         }
       },

        methods: {},
    };
</script>
