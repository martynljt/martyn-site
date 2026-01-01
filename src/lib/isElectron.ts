/**
 * Detect if the application is running in Electron
 * @returns {boolean} True if running in Electron, false otherwise
 */
export function isElectron(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  
  // Check for Electron-specific properties
  const win = window as Window & {
    process?: { type?: string }
    electronAPI?: unknown
  }
  
  return (
    win.process?.type === 'renderer' ||
    win.electronAPI !== undefined ||
    navigator.userAgent.toLowerCase().indexOf('electron') !== -1
  )
}

