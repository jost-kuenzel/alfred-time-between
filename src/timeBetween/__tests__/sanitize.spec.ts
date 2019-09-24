import sanitize from '../sanitize'

describe('sanitize', () => {
  it('replaces empty lines with spaces', () => {
    const s = '1\n\n2'
    expect(sanitize(s)).toBe('1 2')
  })
  it('leaves colons', () => {
    const s = '3 :4'
    expect(sanitize(s)).toBe('3:4')
  })
  it('leaves dashes', () => {
    const s = '1,_-ä3+#'
    expect(sanitize(s)).toBe('1-3')
  })
  it('leaves numbers', () => {
    const s = '1 abcd 23'
    expect(sanitize(s)).toBe('1 23')
  })
  it('replace multiple spaces with single space', () => {
    const s = '1     2'
    expect(sanitize(s)).toBe('1 2')
  })
  it('fixes timeframes with comments', () => {
    const s = '08:00->10:00 ## meeting ## 10:00-11:45 discussion with team'
    expect(sanitize(s)).toBe('08:00-10:00 10:00-11:45')
  })
  it('linearizes multilines', () => {
    const s =
      ' 08 :45 -12:  00\n  lunch with qa\n 10:00  -   12:00\n14:00-15:00'
    expect(sanitize(s)).toBe('08:45-12:00 10:00-12:00 14:00-15:00')
  })
})
