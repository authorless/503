// Функция для генерации уникального ID сессии
export function generateSessionId() {
  const chars = '0123456789ABCDEF'
  const timestamp = Date.now().toString(16).toUpperCase()
  const randomPart = Array.from({ length: 32 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  return `${timestamp}-${randomPart}`
}

// Функция для форматирования времени
export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return {
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(remainingSeconds).padStart(2, '0'),
  }
}

// Класс для управления таймером
export class CountdownTimer {
  constructor(initialSeconds, onTick, onComplete) {
    this.seconds = initialSeconds
    this.onTick = onTick
    this.onComplete = onComplete
    this.timerId = null
  }

  start() {
    if (this.timerId) return

    this.timerId = setInterval(() => {
      this.seconds--

      if (this.seconds <= 0) {
        this.stop()
        this.onComplete?.()
        return
      }

      this.onTick?.(this.seconds)
    }, 1000)
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId)
      this.timerId = null
    }
  }

  getTimeLeft() {
    return formatTime(this.seconds)
  }
}
