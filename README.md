# JS-Log-Terminal
Show log in terminal

Example:
```
const options = {
  background: BACKGROUND.bgYellow,
  color: COLOR.fgGreen,
  endOfLine: EOL.reset,
  type: LOGTYPE.INFO,
}

log('hello', options, 'TERMINAL LOG')
```
---
### [consoleLog] File

E.g:

`logWatch('HELLO')` => HELLO (18:7:4.442)

##### Show Table

`logWatch('HELLO', [{x: 30, y: 25}])` =>  HELLO (18:7:4.442)

(index) | x | y
--- | --- | ---
0 | 30 | 25

---
### [logCustomize] File: With customize color | Can show msg or table

E.g:
```
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
```

---
### Style:

Style | Code
--- | ---
Bold	| \x1B[1m
Faint	| \x1B[2m
Italic	| \x1B[3m
Underlined	| \x1B[4m
Inverse	| \x1B[7m
Strikethrough	| \x1B[9m

---
### Cursor Manipulation

effect | code | 
 ---  |  ---  | 
Goes back one character | \b | 
Moves one line up | \x1B[A | 
Moves n lines up (replace N by the number of lines) | \x1B[NA | 
Goes back to the begining of the line | \r | 
Goes back to the begining of the previous line | \x1B[F | 
Goes back to the begining of the n-th previous line (replace N by the number of lines) | \x1B[NF | 
Erases the whole line | \x1B[2K | 
