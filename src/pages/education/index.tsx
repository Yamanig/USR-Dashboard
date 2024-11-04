import { GraduationCap, Users } from "lucide-react"
import { educationMetrics, chartColors } from "@/lib/data"
import { MetricOverview } from "@/components/shared/metric-overview"
import { RegionalGrid } from "@/components/shared/regional-grid"
import { ChartContainer } from "@/components/shared/chart-container"
import { MetricVariant } from "@/components/shared/metric-card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

function EducationStats({ region }: { region: any }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="text-sm opacity-90">Educated</p>
          <p className="text-lg font-bold">{region.educated.toLocaleString()}</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="text-sm opacity-90">Uneducated</p>
          <p className="text-lg font-bold">{region.uneducated.toLocaleString()}</p>
        </div>
      </div>
      <div className="bg-white/10 p-3 rounded-lg space-y-2">
        <div className="flex justify-between">
          <span className="text-sm opacity-90">Male Educated:</span>
          <span className="font-semibold">{region.maleEducated.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm opacity-90">Female Educated:</span>
          <span className="font-semibold">{region.femaleEducated.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}

const metrics = educationMetrics.overview.map(metric => ({
  ...metric,
  icon: metric.title.includes("Educated") ? 
    <GraduationCap className="h-5 w-5 text-white" /> : 
    <Users className="h-5 w-5 text-white" />,
  variant: (metric.title.includes("Educated") ? "blue" : "pink") as MetricVariant
}))

export default function EducationPage() {
  return (
    <div className="space-y-6">
      <MetricOverview metrics={metrics} />

      <RegionalGrid 
        data={educationMetrics.regional}
        renderStats={(region) => <EducationStats region={region} />}
      />

      <ChartContainer title="Education Status by Region">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={educationMetrics.regional}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #eee",
                borderRadius: "8px"
              }}
            />
            <Legend />
            <Bar 
              dataKey="educated" 
              name="Educated"
              fill={chartColors.primary}
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="uneducated" 
              name="Uneducated"
              fill={chartColors.secondary}
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <ChartContainer title="Education Status by Gender" delay={0.4}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={educationMetrics.regional}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #eee",
                borderRadius: "8px"
              }}
            />
            <Legend />
            <Bar 
              dataKey="maleEducated" 
              name="Male Educated"
              fill={chartColors.blue}
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="femaleEducated" 
              name="Female Educated"
              fill={chartColors.green}
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="maleUneducated" 
              name="Male Uneducated"
              fill={chartColors.purple}
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="femaleUneducated" 
              name="Female Uneducated"
              fill={chartColors.pink}
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}