const { defaults } = require('jest-config')

module.exports = {
  transform: {
    '^.*\\.(ts)$': 'ts-jest'
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  testPathIgnorePatterns: ['/node_modules/', 'dist']
}
