export default {
  addTransaction(context, data) {
    return this.$axios.$post('transactions', data);
  },
}
