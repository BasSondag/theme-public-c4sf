/**
 *  Exports
 */

module.exports = {
  method: 'get',
  endpoint: '/login',
  middleware: [],
  controller: getLogin
}

/**
 *  Controller
 */

function getLogin (req, res) {
  if (req.user) {
    return res.redirect('/')
  }
  res.render(res.theme.public + '/views/account/login', {
    view: 'login',
    title: 'Login',
    brigade: res.locals.brigade
  })
}
