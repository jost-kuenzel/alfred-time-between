import { pipe, map, isNil, ifElse, isEmpty, mapAccum } from 'ramda'
import convertMinToHourMin from './convertMinToHourMin'

const rejectUndefinedTimeframes = (timeframes: Timeframe[]): Timeframe[] =>
  timeframes.filter((tf: Timeframe): boolean => !isNil(tf.duration))

const buildAlfredResultItems = (timeframes: Timeframe[]): AlfredResultItem[] =>
  ifElse(isEmpty, () => [defaultResultItem], map(toAlfredResultItem))(
    timeframes
  )

const toAlfredResultItem = (tf: Timeframe): AlfredResultItem =>
  buildAlfredResultItem(tf.duration!, `${tf.start!}-${tf.end!}`)

const buildAlfredResultItem = (
  duration: number,
  subtitle: string
): AlfredResultItem => ({
  title: `${convertMinToHourMin(duration)}`,
  subtitle,
  icon: {
    path: 'icon.png'
  },
  arg: `${convertMinToHourMin(duration)}`,
  text: {
    copy: `${convertMinToHourMin(duration)}`,
    largetype: `${convertMinToHourMin(duration)}`
  }
})

const defaultResultItem: AlfredResultItem = {
  title: 'Time Between',
  subtitle: 'Enter one or more time spans like HH:MM-HH:MM',
  icon: { path: 'icon.png' }
}

const calcTotalDuration = (timeframes: Timeframe[]): number => {
  const acc: [number, Timeframe[]] = mapAccum(
    (acc: number, tf: Timeframe) => {
      acc += tf.duration ? tf.duration : 0
      return [acc, tf]
    },
    0,
    timeframes
  )
  return acc[0]
}

const buildAlfredResult = (items: AlfredResultItem[]): AlfredResult => ({
  items
})

const ifMultipleTimeframesAddTotalResultItem = (timeframes: Timeframe[]) => (
  items: AlfredResultItem[]
): AlfredResultItem[] =>
  ifElse(
    (timeframes: Timeframe[]) => timeframes.length > 1,
    () => [
      buildAlfredResultItem(calcTotalDuration(timeframes), 'Total'),
      ...items
    ],
    () => items
  )(items)

export default (timeframes: Timeframe[]): AlfredResult =>
  pipe(
    rejectUndefinedTimeframes,
    buildAlfredResultItems,
    ifMultipleTimeframesAddTotalResultItem(timeframes),
    buildAlfredResult
  )(timeframes)
