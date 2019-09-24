export default (a: Date, b: Date): number => {
  const diffMs = Math.abs(b.getTime() - a.getTime())
  const diffMin = Math.round(diffMs / 1000 / 60)

  return diffMin
}
