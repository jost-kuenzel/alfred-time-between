export default (time: string): Date => {
  const match = time.match(/(\d{1,2})\:(\d{2})/)
  if (!match) {
    return new Date()
  }
  const res = new Date()
  res.setHours(parseInt(match[1]))
  res.setMinutes(parseInt(match[2]))

  return res
}
