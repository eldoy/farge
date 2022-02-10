let enabled = false
try {
  let {
    FORCE_COLOR,
    NODE_DISABLE_COLORS,
    NO_COLOR,
    TERM
  } = process.env
  let isTTY = process.stdout && process.stdout.isTTY

  enabled = !NODE_DISABLE_COLORS &&
    NO_COLOR == null &&
    TERM !== 'dumb' && (
      FORCE_COLOR != null && FORCE_COLOR !== '0' || isTTY
    )
} catch(e) {}

module.exports = enabled
