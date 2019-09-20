const defaultResult: AlfredResult = {
  items: [
    {
      title: 'Time Between',
      subtitle: 'Please provide two time like HH:MM-HH:MM',
      icon: { path: 'icon.png' }
    }
  ]
}

export default (s: string): AlfredResult => defaultResult
