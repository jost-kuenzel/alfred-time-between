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
}

interface AlfredResultItemIcon {
  path: string
}
