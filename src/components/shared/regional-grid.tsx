import { motion } from "framer-motion"
import { Card } from "../ui/card"
import { TooltipCard } from "./tooltip-card"

interface RegionData {
  name?: string
  region?: string
  color: string
  [key: string]: any
}

interface RegionalGridProps {
  data: RegionData[]
  renderStats: (item: RegionData) => React.ReactNode
}

export function RegionalGrid({ data, renderStats }: RegionalGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => {
        const regionName = item.name || item.region
        return (
          <motion.div
            key={regionName}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: 0.2 + (index * 0.1),
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className={`bg-gradient-to-br ${item.color} p-6 text-white rounded-xl shadow-lg`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-white/90" />
                <TooltipCard content={`Region: ${regionName}`}>
                  <h3 className="text-lg font-semibold cursor-help">
                    {regionName}
                  </h3>
                </TooltipCard>
              </div>
              {renderStats(item)}
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}