import convertMinToHours from '../convertMinToHours'

describe('convertMinToHours', () => {
  it('returns expected hours', () => {
    expect(convertMinToHours(60)).toBe(1)
    expect(convertMinToHours(120)).toBe(2)
    expect(convertMinToHours(30)).toBe(0.5)
    expect(convertMinToHours(0)).toBe(0)
  })
})
