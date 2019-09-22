import toAlfredResults from '../toAlfredResults'

describe('toTimeframes', () => {
  it('convert to timeframe interface', () => {
    const timeframes = [
      {
        start: '08:00',
        end: '12:00',
        duration: '4:00'
      }
    ]

    const res = toAlfredResults(timeframes)
    expect(res.items.length).toBe(1)
    expect(res.items[0].arg).toBe('4:00')
    expect(res.items[0].subtitle).toBe('08:00-12:00')
  })
})
