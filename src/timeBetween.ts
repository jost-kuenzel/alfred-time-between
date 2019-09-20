import app from './timeBetween/app'

export const timeBetween = (s: string): string => JSON.stringify(app(s))
