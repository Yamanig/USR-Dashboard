import { motion } from "framer-motion"
import { Card } from "../ui/card"

interface ChartContainerProps {
  title: string
  children: React.ReactNode
  delay?: number
}

export function ChartContainer({ title, children, delay = 0.3 }: ChartContainerProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#60A5FA]" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="h-[400px]">
          {children}
        </div>
      </Card>
    </motion.div>
  )
}