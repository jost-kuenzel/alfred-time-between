/**
 * This scripts creates the .alfredworkflow file.
 * It uses the systems zip command to create a zip file (with file
 * extension .alfredworkflow) in the dist dir. The zip includes all files
 * from the build dir (created by yarn build).
 */

const buildDir = __dirname + '/../build/'
const distDir = __dirname + '/../dist/'
const packageName = require('../package.json').name
const archiveName = `${packageName}.alfredworkflow`
const archivePath = distDir + archiveName

const pipe = require('ramda').pipe
const tap = require('ramda').tap
const tryCatch = require('ramda').tryCatch
const Either = require('ramda-fantasy').Either
const logSymbols = require('log-symbols')
const out = console.log
const fs = require('fs')
const spawn = require('child_process').spawnSync

/**
 * Returns an Either.Right if build dir exists.
 * Returns an Either.Left with error message otherwise.
 */
const checkBuildDir = () =>
  fs.existsSync(buildDir)
    ? Either.Right(true)
    : Either.Left(`${buildDir} does not exist yet. Please build first.`)

/**
 * Maybe creates the dist dir
 * @param {Either} either
 */
const maybeMakeDistDir = (either) =>
  either.map(() => fs.mkdirSync(distDir, { recursive: true }))

/**
 * Gives feedback if dist dir was created
 */
const maybeMakeDistDirFeedback = tap(
  (either) =>
    Either.isRight(either) &&
    out(`${logSymbols.success} Made sure dist directory exists`)
)
/**
 * Maybe removes previously created zip file
 * @param {Either} either
 */
const maybeUnlinkZip = (either) =>
  either.map(
    tryCatch(
      () => fs.unlinkSync(archivePath),
      () => {}
    )
  )

/**
 * Gives feedback if zip was removed
 */
const maybeUnlinkZipFeedback = tap(
  (either) => Either.isRight(either) && out(`${logSymbols.success} Cleanup`)
)

/**
 * Maybe creates a zip file from files in build dir
 * @param {Either} either
 */
const maybeCreateZip = (either) =>
  either.chain(() => {
    const { status, error } = spawn('zip', ['-jr', archivePath, buildDir])
    return status !== 0
      ? Either.Left(`${error.toString()}`)
      : Either.Right(status)
  })

/**
 * Gives feedback if zip was created
 */
const maybeCreateZipFeedback = tap(
  (either) =>
    Either.isRight(either) &&
    out(`${logSymbols.success} Created ${archiveName}`)
)

/**
 * Gives finalfeedback
 */
const finalFeedback = tap((either) =>
  either.either(
    (err) => out(`${logSymbols.error} Failed: ${err}`),
    () => out(`${logSymbols.success} Finished without errors`)
  )
)

// I ❤️ ramda
pipe(
  checkBuildDir,
  maybeMakeDistDir,
  maybeMakeDistDirFeedback,
  maybeUnlinkZip,
  maybeUnlinkZipFeedback,
  maybeCreateZip,
  maybeCreateZipFeedback,
  finalFeedback
)()
