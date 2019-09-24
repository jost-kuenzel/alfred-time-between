import convertMinToHourMin from '../convertMinToHourMin'

describe('convertMinToHourMin', () => {
  it('returns expected hours', () => {
    expect(convertMinToHourMin(60)).toBe('1:00')
    expect(convertMinToHourMin(120)).toBe('2:00')
    expect(convertMinToHourMin(30)).toBe('0:30')
    expect(convertMinToHourMin(11)).toBe('0:11')
    expect(convertMinToHourMin(61)).toBe('1:01')
    expect(convertMinToHourMin(0)).toBe('0:00')
    expect(convertMinToHourMin(0.125)).toBe('0:00')
  })
})
