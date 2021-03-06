var Marty = require('marty')

var Application = Marty.createApplication(function () {
  this.register(require('./stores'))
  this.register(require('./actions'))
  this.register(require('./sources'))
  this.router = require('./router')
})

module.exports = Application

