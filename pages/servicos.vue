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

    <NuxtChild />
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
