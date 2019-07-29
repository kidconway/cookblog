exports.landingPage = (req, res) => {
  const fetch_random = `https://api.spoonacular.com/recipes/random?number=1`
  // console.log('req', req)
  console.log('res', res)
  res.render('main')
}

// exports.searchRecipes = (req, res) => {
//
// }

exports.landingPageRecipe = (req, res) => {

}
