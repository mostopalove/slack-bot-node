const messagesListener = require('./messages')
const commandListener = require('./commands')
const viewsListener = require('./views')
const actionsListener = require('./actions')

module.exports.registerListeners = (app) => {
  messagesListener.register(app)
  commandListener.register(app)
  viewsListener.register(app)
  actionsListener.register(app)
}