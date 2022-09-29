
/**
 * Log Customize With Color
 * @param string msg
 * @param {
 *  color: string | array
 *  bg: string | array
 *  table: array
 * } options
 * value in [0-255]
 * rgb value in [0-255] with array type
 * E.g: [255, 255, 255]
 */
const logBlock = (msg, options = {}) => {
  let color = '',
    bg = '',
    styleCode = '',
    eol = '\x1B[0m\n=======================================\n'
  if (options.color) {
    if (Array.isArray(options.color)) {
      color = `\x1B[38;2;${options.color.join(';')}m`
    } else {
      color = `\x1B[38;5;${options.color}m`
      console.log(color)
    }
  }

  if (options.background) {
    if (Array.isArray(options.background)) {
      bg = `\x1B[48;2;${options.background.join(';')}m`
    } else {
      bg = `\x1B[48;5;${options.background}m`
    }
  }

  if (options.styleCode) {
    styleCode = options.styleCode
  }

  if (Array.isArray(options.table)) {
    console.log(`${color}${styleCode}%s${eol}`, msg)
    console.log(bg)
    console.table(options.table)
    console.log(eol)
  } else {
    console.log(`${bg}${color}${styleCode}%s${eol}`, msg)
  }
}

logBlock('hello', {
  color: '127',
  background: '47',
  table: [{ x: 3, y: 5 }],
})

logBlock('hello', {
  color: [24, 241, 163],
  background: '67',
  table: [{ x: 3, y: 5 }],
})

logBlock('hello', {
  color: '127',
  background: [124, 21, 56],
  table: [{ x: 3, y: 5 }],
})
