"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  x?: number
  y?: number
  duration?: number
  once?: boolean
}

export function Reveal({ children, className, delay = 0, x = 24, y = 24, duration = 0.6, once = false }: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: typeof x === "number" ? 0 : y,
      x: typeof x === "number" ? x : 0, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
  }

  return (
    <motion.div
      className={cn("will-change-transform will-change-opacity", className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
