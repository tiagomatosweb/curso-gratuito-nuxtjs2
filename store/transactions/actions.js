export default {
  getTransactions() {
    return this.$axios.$get('transactions?_expand=category');
  },
  addTransaction(context, data) {
    return this.$axios.$post('transactions', data);
  },
  updateTransaction(context, { id, data }) {
    return this.$axios.$patch(`transactions/${id}`, data);
  },
}
