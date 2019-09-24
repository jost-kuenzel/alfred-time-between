import { pipe, replace } from 'ramda'

export default (s: string): string =>
  pipe(
    replace(/[^0-9:-\s]+/g, ' '), // remove all undesired characters
    replace(/\s\s+/g, ' '), // replace multiple spaces with single space
    replace(/\s*-\s*/g, '-'), // remove spaces around dashes
    replace(/\s*:\s*/g, ':'), // remove spaces around colons
    replace(/\s+$/g, ''), // remove trailing spaces
    replace(/^\s+/g, '') // remove leading spaces
  )(s)
