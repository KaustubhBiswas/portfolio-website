"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import NET from "vanta/dist/vanta.net.min"
import Loader from "./loader"
import { AnimatePresence } from "framer-motion"

export default function Background() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff00ff,
        backgroundColor: 0x000000,
        lineColor: 0x00ff00,
        points: 10.0,
        spacing: 20.0,
        showDots: false,
      })

      setVantaEffect(effect)

      // wait before hiding loader so background initializes
      setTimeout(() => setLoading(false), 1200)
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <div
        ref={vantaRef}
        className="fixed inset-0 -z-10 w-full h-full"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
      />
    </>
  )
}
