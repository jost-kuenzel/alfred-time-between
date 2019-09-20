import getDateFromHour from '../getDateFromHour'

describe('getDateFromHour', () => {
  it('returns expected date', () => {
    const expected = new Date()
    expected.setHours(12)
    expected.setMinutes(12)

    expect(getDateFromHour('12:12').toString()).toBe(expected.toString())
  })
  it('handles invalid strings', () => {
    expect(getDateFromHour('foo').toString()).toBe(new Date().toString())
    expect(getDateFromHour('').toString()).toBe(new Date().toString())
  })
})
