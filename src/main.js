const { timeBetween } = require('./timeBetween')

const query = process.argv.splice(2)
const jsonResult = timeBetween(query)

process.stdout.write(jsonResult)
