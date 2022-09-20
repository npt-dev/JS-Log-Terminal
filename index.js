
const EOL = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
}
const COLOR = {
  fgBlack: '\x1b[30m',
  fgRed: '\x1b[31m',
  fgGreen: '\x1b[32m',
  fgYellow: '\x1b[33m',
  fgBlue: '\x1b[34m',
  fgMagenta: '\x1b[35m',
  fgCyan: '\x1b[36m',
  fgWhite: '\x1b[37m',
}

const BACKGROUND = {
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
}

const LOGTYPE = {
  SUCCESS: 'SUCCESS',
  WARN: 'WARN',
  ERROR: 'ERROR',
  INFO: 'INFO',
}

const log = (msg, options, title) => {
  let { type, background, color, endOfLine } = options
  let message = title ? `${title}: ${msg}` : msg

  background = background || ''
  endOfLine = endOfLine || EOL.reset
  switch (type) {
    case LOGTYPE.SUCCESS:
      {
        color = color || COLOR.fgGreen
        message = `=== ✅ ${message}`
      }
      break
    case LOGTYPE.ERROR:
      {
        color = color || COLOR.fgRed
        message = `=== ❌️ ${message}`
      }
      break
    case LOGTYPE.WARN:
      {
        background = background || BACKGROUND.bgYellow
        color = color || COLOR.yellow
        message = `=== ⚠️ ${message}`
      }
      break
    case LOGTYPE.INFO:
      {
        color = color || COLOR.fgBlue
        message = `=== ℹ️ ${message}`
      }
      break
    default:
      message = `===∫ ${message}`
  }

  let customize = `${background}${color}%s${endOfLine}`
  console.info(customize, message)
}
