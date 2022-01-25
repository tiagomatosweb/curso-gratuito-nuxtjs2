export default {
  getTransactions() {
    return this.$axios.$get('transactions?_expand=category');
  },
  addTransaction(context, data) {
    return this.$axios.$post('transactions', data);
  },
}
