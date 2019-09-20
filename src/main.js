const { timeBetween } = require('./timeBetween')

const query = process.argv.splice(2)
// timeBetween(query)
process.stdout.write(
  '{"items":[{"title":"XX Time Between","subtitle":"Please provide two time like HH:MM-HH:MM","icon":{"path":"icon.png"}}]}'
)
