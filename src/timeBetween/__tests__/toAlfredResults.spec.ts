import toAlfredResults from '../toAlfredResults'

describe('toAlfredResults', () => {
  it('convert to alfred result interface', () => {
    const timeframes = [
      {
        start: '08:00',
        end: '12:00',
        duration: 4 * 60,
      },
    ]

    const res = toAlfredResults(timeframes)
    expect(res.items.length).toBe(1)
    expect(res.items[0].arg).toBe('4:00')
    expect(res.items[0].subtitle).toBe('08:00-12:00')
  })
})
