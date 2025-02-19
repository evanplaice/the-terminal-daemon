const actions = require('../../../actions')
const { getArgs } = require('../../../lib/command')
const { name } = require('../wallet.command')

const test = () => true

const exec = req => {
  const [command] = getArgs(req.body.line)
  return [actions.echo(`${name}: ${command}: Invalid command`)]
}

module.exports = {
  sort: 100,
  test,
  exec
}
