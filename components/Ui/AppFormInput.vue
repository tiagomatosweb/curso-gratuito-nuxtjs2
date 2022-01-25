<template>
  <input
    class="block w-full transition ease-in-out duration-150 text-gray-800 bg-white placeholder-gray-300 border border-gray-300 focus:border-blue-300 focus:ring focus:ring-opacity-50 focus:ring-blue-200 shadow-sm text-sm px-4 py-2 rounded"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    v-on="inputListeners"
  >
</template>

<script>
export default {
  name: 'AppFormInput',

  props: {
    value: {
      type: [String, Number],
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'text',
    },
  },

  data() {
    return {
      localValue: this.value,
    };
  },

  watch: {
    value(value) {
      this.localValue = value;
    },
  },

  computed: {
    inputListeners() {
      const vm = this;
      return {
        ...this.$listeners,
        input(event) {
          vm.$emit('input', event.target.value);
        },
      };
    },
  },
};
</script>
