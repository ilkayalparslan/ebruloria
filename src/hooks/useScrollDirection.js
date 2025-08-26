import { useState, useEffect } from 'react'

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset

      // Only update if we've scrolled more than 10px to avoid jitter
      if (Math.abs(scrollY - lastScrollY) < 10) {
        return
      }

      const direction = scrollY > lastScrollY ? 'down' : 'up'

      // Update direction if it has changed
      if (direction !== scrollDirection) {
        setScrollDirection(direction)
      }

      setLastScrollY(scrollY)
    }

    const throttledUpdateScrollDirection = () => {
      requestAnimationFrame(updateScrollDirection)
    }

    window.addEventListener('scroll', throttledUpdateScrollDirection, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', throttledUpdateScrollDirection)
    }
  }, [scrollDirection, lastScrollY])

  return scrollDirection
}

export default useScrollDirection
