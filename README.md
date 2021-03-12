# wCat

wCat is a clone of cat command available in bash but not in windows cmd. It is used to display or make a copy content of one or more files in the terminal

## General Syntax:

```bash
node wcat.js [options] [files]
```

| Options | Working                                               |
| ------- | ----------------------------------------------------- |
| -s      | Converts Multiple Line Breaks into Single Line Breaks |
| -b      | Adds Line Number to Non-empty Lines                   |
| -n      | Adds Line Number to All the Lines                     |

_-n and -b are 2 options which are mutually exclusive so if user types both of them together only the first enter option should work._

## Commands:

1. **node wcat.js filepath** => displays content of the file in the terminal
2. **node wcat.js filepath1 filepath2 filepath3...** => displays content of all files in the terminal(contactinated form) in the given order.
3. **node wcat.js -s filepath** => convert big line breaks into a singular line break
4. **node wcat -n filepath** => give numbering to all the lines
5. **node wcat -b filepath** => give numbering to non-empty lines
   _We can mix and match the options._

**Edge cases:**

1. If file entered is not found then it gives file does not exist error.

**Not Working So Far**

6. node wcat filenamepath > filename2path => put all the content of filename into filename2 by overriding and also creates filename2 if it doesn't exist.
7. node wcat filename >> filename2 => append all the content of filename into filename2
8. node wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2
