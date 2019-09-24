interface AlfredResult {
  items: AlfredResultItem[]
}

interface AlfredResultItem {
  uid?: string
  type?: string
  title: string
  subtitle?: string
  arg?: string
  autocomplete?: string
  icon?: AlfredResultItemIcon
  text?: AlfredResultItemText
}

interface AlfredResultItemIcon {
  path: string
}
interface AlfredResultItemText {
  copy?: string
  largetype?: string
}

interface Timeframe {
  start: string | undefined
  end: string | undefined
  duration: number | undefined
}
