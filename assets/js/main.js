import { CountdownTimer, generateSessionId } from './timer.js'

document.addEventListener('DOMContentLoaded', () => {
  // енерация нового ID сессии при каждой загрузке
  const sessionId = generateSessionId()
  document.querySelector('.session-id').textContent = sessionId

  // станавливаем время 5 минут (300 секунд)
  const timer = new CountdownTimer(
    300,
    // ункция обновления таймера
    seconds => {
      const timeLeft = timer.getTimeLeft()
      document.querySelector('.timer').textContent = `${timeLeft.minutes}:${timeLeft.seconds}`
    },
    // ункция завершения таймера
    () => {
      location.reload()
    },
  )

  // апуск таймера
  timer.start()

  // аскировка IP-адреса
  const ipElement = document.querySelector('.ip-address')
  if (ipElement) {
    ipElement.textContent = '**.**.**.***'
  }
})
