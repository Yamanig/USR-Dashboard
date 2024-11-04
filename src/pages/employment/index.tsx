import { Briefcase, Users } from "lucide-react"
import { employmentMetrics, chartColors } from "@/lib/data"
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

const metrics = employmentMetrics.overview.map(metric => ({
  ...metric,
  icon: metric.title.includes("Employed") ? 
    <Briefcase className="h-5 w-5 text-white" /> : 
    <Users className="h-5 w-5 text-white" />,
  variant: (metric.title.includes("Employed") ? "blue" : "pink") as MetricVariant
}))

export default function EmploymentPage() {
  return (
    <div className="space-y-6">
      <MetricOverview metrics={metrics} />

      <RegionalGrid 
        data={employmentMetrics.regional}
        renderStats={(region) => (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-sm opacity-90">Employed</p>
                <p className="text-lg font-bold">{region.employed.toLocaleString()}</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-sm opacity-90">Unemployed</p>
                <p className="text-lg font-bold">{region.unemployed.toLocaleString()}</p>
              </div>
            </div>
            <div className="bg-white/10 p-3 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-sm opacity-90">Male Employed:</span>
                <span className="font-semibold">{region.maleEmployed.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm opacity-90">Female Employed:</span>
                <span className="font-semibold">{region.femaleEmployed.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      />

      <ChartContainer title="Employment Status by Region">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={employmentMetrics.regional}>
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
              dataKey="employed" 
              name="Employed"
              fill={chartColors.primary}
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="unemployed" 
              name="Unemployed"
              fill={chartColors.secondary}
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <ChartContainer title="Employment Status by Gender" delay={0.4}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={employmentMetrics.regional}>
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
              dataKey="maleEmployed" 
              name="Male Employed"
              fill={chartColors.blue}
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="femaleEmployed" 
              name="Female Employed"
              fill={chartColors.green}
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="maleUnemployed" 
              name="Male Unemployed"
              fill={chartColors.purple}
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="femaleUnemployed" 
              name="Female Unemployed"
              fill={chartColors.pink}
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}