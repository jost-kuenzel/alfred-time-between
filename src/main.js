const { timeBetween } = require('./timeBetween')

const query = process.argv.splice(2).join(' ')
const jsonResult = timeBetween(query)

process.stdout.write(jsonResult)
