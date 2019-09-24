import lib from './timeBetween/'

export const timeBetween = (s: string): string => JSON.stringify(lib(s))
