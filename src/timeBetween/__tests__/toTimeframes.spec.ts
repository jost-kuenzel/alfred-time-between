import toTimeframes from '../toTimeframes'

describe('toTimeframes', () => {
  it('convert to timeframe interface', () => {
    const s = '08:00-12:00 13:00-17:30'
    expect(toTimeframes(s)).toStrictEqual([
      {
        start: '08:00',
        end: '12:00',
        duration: 4 * 60,
      },
      {
        start: '13:00',
        end: '17:30',
        duration: 4.5 * 60,
      },
    ])
  })
})
