const farge = require('../index.js')()
const colors = require('../lib/colors.js')

for (const c1 in colors) {
  farge[c1].log(c1 + '\n')
  for (const c2 in colors) {
    farge[c1][c2].log(c1 + '\n')
  }
}
