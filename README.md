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

id | x | y
--- | --- | ---
0 | 30 | 25
