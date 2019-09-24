import { pipe, split, nth, defaultTo, map } from 'ramda'
import getDateFromHour from '../domain/getDateFromHour'
import getDiffMinutes from '../domain/getDiffMinutes'

const convertToTimeframe = (s: string): Timeframe => {
  const matches = defaultTo([], s.match(/(\d+:\d+)-(\d+:\d+)/))
  const getStart = nth(1)
  const getEnd = nth(2)

  return {
    start: getStart(matches),
    end: getEnd(matches),
    duration: undefined
  }
}

const calculateDuration = (tf: Timeframe): Timeframe => {
  if (!(tf.start && tf.end)) {
    return { start: tf.start, end: tf.end, duration: undefined }
  }

  const a = getDateFromHour(tf.start)
  const b = getDateFromHour(tf.end)
  const duration = getDiffMinutes(a, b)

  return {
    start: tf.start,
    end: tf.end,
    duration
  }
}

export default (s: string): Timeframe[] =>
  pipe(
    split(' '), // split by space
    map(convertToTimeframe),
    map(calculateDuration)
  )(s)
