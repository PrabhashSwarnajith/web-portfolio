import React, { useEffect, useRef } from "react"

const AnimatedBackground = () => {
  const blobRefs = useRef([])
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ]

  useEffect(() => {
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!motionOk) return

    const handleScroll = () => {
      const newScroll = window.pageYOffset
      blobRefs.current.forEach((blob, index) => {
        if (!blob) return
        const initialPos = initialPositions[index]
        const xOffset = Math.sin(newScroll / 300 + index * 0.5) * 60
        const yOffset = Math.cos(newScroll / 300 + index * 0.5) * 20
        blob.style.transform = `translate(${initialPos.x + xOffset}px, ${initialPos.y + yOffset}px)`
        blob.style.transition = "transform 1.6s ease-out"
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0">
        <div
          ref={(ref) => (blobRefs.current[0] = ref)}
          className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 md:opacity-15"
        />
        <div
          ref={(ref) => (blobRefs.current[1] = ref)}
          className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 md:opacity-15 hidden sm:block"
        />
        <div
          ref={(ref) => (blobRefs.current[2] = ref)}
          className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 md:opacity-15"
        />
        <div
          ref={(ref) => (blobRefs.current[3] = ref)}
          className="absolute -bottom-10 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 md:opacity-10 hidden sm:block"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  )
}

export default AnimatedBackground
