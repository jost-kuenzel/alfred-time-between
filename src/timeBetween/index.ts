import { pipe } from 'ramda'
import sanitize from './sanitize'
import toTimeframes from './toTimeframes'
import toAlfredResults from './toAlfredResults'

export default (alfredInput: string): AlfredResult =>
  pipe(sanitize, toTimeframes, toAlfredResults)(alfredInput)
