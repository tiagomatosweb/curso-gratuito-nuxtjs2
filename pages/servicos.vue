<template>
  <div>
    <h1 class="text-lg font-bold">Serviços</h1>

    <NuxtLink to="/servicos/desenvolvimento-de-sites">
      Desenvolvimento de sites
    </NuxtLink>

    <NuxtLink to="/servicos/marketing-digital">
      Marketing digital
    </NuxtLink>

    <br><br>

    <div v-if="$fetchState.pending">
      Carregando ...
    </div>

    <div v-else>
      <div
        v-for="service in services" :key="service.id"
        class="border-b border-gray-400 py-4"
      >
        {{ service.username }}
      </div>
    </div>

    <br><br>

    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: '',

  data() {
    return {
      services: []
    };
  },

  async fetch() {
    this.services = await this.$axios.$get('https://jsonplaceholder.typicode.com/users?_limit=3')
  },

  methods: {},
};
</script>
