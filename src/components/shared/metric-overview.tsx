import { motion } from "framer-motion"
import { MetricCard, MetricVariant } from "./metric-card"

interface Metric {
  title: string
  value: string
  description: string
  variant: MetricVariant
  icon: React.ReactNode
}

interface MetricOverviewProps {
  metrics: Metric[]
}

export function MetricOverview({ metrics }: MetricOverviewProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {metrics.map((metric, index) => (
        <motion.div 
          key={`metric-${metric.title.toLowerCase().replace(/\s+/g, '-')}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <MetricCard {...metric} index={index} />
        </motion.div>
      ))}
    </div>
  )
}