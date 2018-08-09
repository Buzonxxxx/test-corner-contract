const path = require('path')
const fs = require('fs')
const solc = require('solc')

const inboxPath = path.resolve(__dirname, 'contracts', 'TestCorner.sol')
// console.log(inboxPath)

const source = fs.readFileSync(inboxPath, 'utf8')

// console.log(solc.compile(source).contracts[':Greeting'])
module.exports = solc.compile(source).contracts[':Greeting']


