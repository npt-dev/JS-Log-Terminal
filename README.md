# JS-Log-Terminal
Show log in terminal

Example:

const options = {
  background: BACKGROUND.bgYellow,
  color: COLOR.fgGreen,
  endOfLine: EOL.reset,
  type: LOGTYPE.INFO,
}

log('hello', options, 'TERMINAL LOG')

// consoleLog file

logWatch('HELLO') => HELLO (18:7:4.442)

// Show Table

logWatch('HELLO', [{x: 30, y: 25}]) =>  HELLO (18:7:4.442)

(index) | x | y
--- | --- | ---
0 | 30 | 25

// With customize color | Can show msg or table

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

