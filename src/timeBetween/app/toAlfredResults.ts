import { pipe, map, isNil, ifElse, isEmpty, T } from 'ramda'

const rejectUndefinedTimeframes = (timeframes: Timeframe[]): Timeframe[] =>
  timeframes.filter((tf: Timeframe): boolean => !isNil(tf.duration))

const buildAlfredResultItems = (timeframes: Timeframe[]): AlfredResultItem[] =>
  ifElse(isEmpty, () => [defaultResultItem], map(toAlfredResultItem))(
    timeframes
  )

const toAlfredResultItem = (tf: Timeframe): AlfredResultItem => ({
  title: `${tf.duration!} Stunden`,
  subtitle: `${tf.start!}-${tf.end!}`,
  icon: {
    path: 'icon.png'
  },
  arg: tf.duration!,
  text: {
    copy: tf.duration!,
    largetype: tf.duration!
  }
})

const defaultResultItem: AlfredResultItem = {
  title: 'Time Between',
  subtitle: 'Please provide two time like HH:MM-HH:MM',
  icon: { path: 'icon.png' }
}

const buildAlfredResult = (items: AlfredResultItem[]): AlfredResult => ({
  items
})

export default (timeframes: Timeframe[]): AlfredResult =>
  pipe(
    rejectUndefinedTimeframes,
    buildAlfredResultItems,
    buildAlfredResult
  )(timeframes)
