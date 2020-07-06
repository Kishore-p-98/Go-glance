# Golang-glance vscode entension 

 - Vscode extension for Golang 
 - Removes simple error snippets to get a better glance

## Usage

- In Go, error is handled immediately after the events like :
  - Network calls
  - Opening/Closing Db connections
  - Opening/Writing/Closing to files
  - ... and many more.

- We often need to glance a part of snippet for a while to get the flow of program  
rather than going into the complete details of error handling blocks. This extension  
removes the simple error blocks to get a better overview.

## Demo
![demo](demo.gif)


## Running extension locally

- Open this example in VS Code
- `npm install`
- `npm run watch` or `npm run compile`
- `F5` to start debugging
-  In the development host window create a file with .go extension and write some code

Run the `Glance Go` command by command pallete or enter `Shift + Q` after selecting Go snippet

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Kishore-p-98/Go-glance/issues)

This project welcomes contributions and suggestions. 

## License
[MIT](LICENSE)