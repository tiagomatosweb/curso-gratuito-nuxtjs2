export default (context, inject) => {
  // inject('name', 'Jon')
  inject('name', (name) => `Olá ${name}`)
}
