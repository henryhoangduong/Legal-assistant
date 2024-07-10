import { useState, useEffect, MutableRefObject } from 'react'

export const useIsVisible = (
  ref: MutableRefObject<HTMLElement | undefined>
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}

export default useIsVisible
