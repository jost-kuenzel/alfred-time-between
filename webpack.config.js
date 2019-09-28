const path = require('path')

const WebpackProgressBar = require('webpack-progress-bar')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const PermissionsOutputPlugin = require('webpack-permissions-plugin')
const outputFolder = 'build'
const shellScript = 'run-node.sh'

module.exports = () => ({
  plugins: [
    new WebpackProgressBar({ clear: true }),
    new CleanWebpackPlugin({ verbose: false }),
    new CopyPlugin([
      { from: 'src/main.js', to: '' },
      { from: 'src/' + shellScript, to: '' },
      { from: 'src/assets', to: '' }
    ]),
    new PermissionsOutputPlugin({
      buildFiles: [
        {
          path: path.resolve(__dirname, outputFolder, shellScript),
          fileMode: '755'
        }
      ]
    })
  ],
  entry: './src/timeBetween.ts',
  output: {
    path: path.resolve(__dirname, outputFolder),
    libraryTarget: 'commonjs2',
    filename: 'timeBetween.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/, '/src/**/__tests__/**'],
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
})
