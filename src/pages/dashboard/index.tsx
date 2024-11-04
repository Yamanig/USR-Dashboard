import { Users2, Home } from "lucide-react"
import { dashboardMetrics, chartColors } from "@/lib/data"
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
  PieChart,
  Pie,
  Cell,
} from "recharts"

const metrics = dashboardMetrics.overview.map(metric => ({
  ...metric,
  icon: metric.title.includes("Households") ? 
    <Home className="h-5 w-5 text-white" /> : 
    <Users2 className="h-5 w-5 text-white" />,
  variant: (metric.title.includes("Households") ? "blue" : "purple") as MetricVariant
}))

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section id="overview">
        <MetricOverview metrics={metrics} />

        <div className="mt-8">
          <ChartContainer title="State Distribution">
            <RegionalGrid 
              data={dashboardMetrics.states}
              renderStats={(state) => (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm opacity-90">Households</p>
                      <p className="text-lg font-bold">{state.households}</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm opacity-90">Members</p>
                      <p className="text-lg font-bold">{state.members}</p>
                    </div>
                  </div>
                </div>
              )}
            />
          </ChartContainer>
        </div>
      </section>

      <section id="analytics">
        <div className="grid gap-8 md:grid-cols-2">
          <ChartContainer title="Age Distribution">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dashboardMetrics.ageDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #eee",
                    borderRadius: "8px"
                  }}
                />
                <Bar
                  dataKey="count"
                  fill={chartColors.secondary}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <ChartContainer title="Gender Distribution">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dashboardMetrics.genderDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dashboardMetrics.genderDistribution.map((_, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === 0 ? chartColors.blue : chartColors.pink} 
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #eee",
                    borderRadius: "8px"
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </section>

      <section id="reports">
        <ChartContainer title="Employment Status">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dashboardMetrics.employmentStatus} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis type="number" />
              <YAxis dataKey="status" type="category" width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #eee",
                  borderRadius: "8px"
                }}
              />
              <Bar
                dataKey="value"
                fill={chartColors.primary}
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </section>
    </div>
  )
}