export default {
  getCategories() {
    return this.$axios.$get('categories');
  },
  deleteCategory(context, id) {
    return this.$axios.$delete(`categories/${id}`)
  },
  updateCategory(context, { id, data }) {
    return this.$axios.$patch(`categories/${id}`, data)
  },
  addCategory(context, data) {
    return this.$axios.$post('categories', data)
  },
}
