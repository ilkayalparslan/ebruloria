import { useState, useEffect } from 'react'

const useScrollVisibility = (triggerPoint = 100) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset

      // Hide navbar when scrolled past trigger point
      setIsVisible(scrollY <= triggerPoint)
    }

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Check initial scroll position
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [triggerPoint])

  return isVisible
}

export default useScrollVisibility
