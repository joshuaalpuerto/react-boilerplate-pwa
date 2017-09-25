/*eslint-disable*/
const env = process.env.NODE_ENV
if (env === 'production') {
  console.log(`TRAVIS_PULL_REQUEST_SLUG=${process.env.TRAVIS_PULL_REQUEST_SLUG}`)


} else {
  console.log(`TRAVIS_PULL_REQUEST_SLUG=joshuaalpuerto/react-boilerplate-pwa`)

}
