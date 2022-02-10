const colors = require('./lib/colors.js')
const enabled = require('./lib/enabled.js')
const names = Object.keys(colors)

function colorize(type, str) {
  const v = colors[type]
  return `\x1b[${v[0]}m` + str + `\x1b[${v[1]}m`
}

let current = []

module.exports = function farge(opt = {}) {
  function log(str) {
    if (enabled) {
      let i = current.length
      while(current[--i]) {
        str = colorize(current[i], str)
      }
    }
    if (opt.newline) str += '\n'
    process.stdout.write(str)
    current = []
  }

  return new Proxy({}, {
    get(target, name, receiver) {
      if (name == 'log') {
        return log
      }
      if (!current.includes(name) && names.includes(name)) {
        current.push(name)
      }
      return receiver
    }
  })
}
