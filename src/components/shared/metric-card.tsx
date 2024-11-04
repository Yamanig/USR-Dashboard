import { motion } from "framer-motion"
import { Card } from "../ui/card"

export type MetricVariant = "blue" | "green" | "purple" | "orange" | "teal" | "pink";

export interface MetricCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  description?: string
  variant?: MetricVariant
  index?: number
}

const variants: Record<MetricVariant, string> = {
  blue: "from-[#60A5FA] to-[#3B82F6]",
  green: "from-[#34D399] to-[#059669]",
  purple: "from-[#A78BFA] to-[#7C3AED]",
  orange: "from-[#FBBF24] to-[#D97706]",
  teal: "from-[#2DD4BF] to-[#0D9488]",
  pink: "from-[#F472B6] to-[#DB2777]"
}

export function MetricCard({ 
  title, 
  value, 
  icon, 
  description, 
  variant = "blue",
  index = 0
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay: 0.1 + (index * 0.1),
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className={`bg-gradient-to-br ${variants[variant]} p-6 text-white rounded-xl shadow-lg`}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-white/90" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">{value}</p>
            {description && (
              <p className="mt-1 text-sm text-white/80">{description}</p>
            )}
          </div>
          <div className="rounded-full bg-white/10 p-3">
            {icon}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}