interface AlfredResult {
  items: AfredResultItem[]
}

interface AlfredResultItem {
  uid?: string
  type?: string
  title: string
  subtitle?: string
  arg?: string
  autocomplete?: string
  icon?: AlfredResultItemIcon
}

interface AlfredResultItemIcon {
  type: string
  path: string
}
