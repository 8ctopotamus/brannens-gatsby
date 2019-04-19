const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://8ctopotamus.github.io/brannens-gatsby',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
