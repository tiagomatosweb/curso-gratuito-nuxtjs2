<template>
    <button
      class="inline-flex items-center justify-center border focus:outline-none transition ease-in-out duration-150 text-white bg-indigo-600 hover:bg-indigo-800 border-indigo-600 hover:border-indigo-800 rounded text-sm px-4 py-2"
      @click="$emit('click')"
    >
      <slot />
    </button>
</template>

<script>
    export default {
        name: 'AppButton',

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
