import getDiffMinutes from '../getDiffMinutes'
import getDateFromHour from '../getDateFromHour'

describe('getDiffMinutes', () => {
  it('returns expected minutes', () => {
    const d1 = getDateFromHour('8:00')
    const d2 = getDateFromHour('12:00')

    expect(getDiffMinutes(d1, d2)).toBe(4 * 60)
  })
})
