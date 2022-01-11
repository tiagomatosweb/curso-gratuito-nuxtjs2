export default ({ redirect }) => {
  console.log('auth middleware');

  const loggedIn = true;

  if (!loggedIn) {
    return redirect('/');
  }
}
