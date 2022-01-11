<template>
  <div>
    <div class="bg-gray-100">
      <div class="container mx-auto flex items-center space-x-4 h-10 mb-10">
        <NuxtLink :to="{ name: 'a-empresa' }">A empresa</NuxtLink>
        <NuxtLink to="/servicos">Serviços</NuxtLink>
        <NuxtLink to="/produtos">Produtos</NuxtLink>
      </div>
    </div>

    <div>
      <div class="container mx-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
