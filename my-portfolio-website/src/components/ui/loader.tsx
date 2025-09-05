"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#251345] z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </motion.div>
  )
}
