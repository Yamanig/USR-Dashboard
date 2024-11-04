import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface TooltipCardProps {
  content: string
  children: React.ReactNode
}

export function TooltipCard({ content, children }: TooltipCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap"
          >
            {content}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}