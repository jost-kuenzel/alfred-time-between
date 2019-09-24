export default (min: number): string => {
  min = Math.floor(min)
  const h = Math.floor(min / 60)
  const mm = (min % 60).toString().padStart(2, '0')
  return `${h}:${mm}`
}
