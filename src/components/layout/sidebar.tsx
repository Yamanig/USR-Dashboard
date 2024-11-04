import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { LayoutDashboard,  GraduationCap, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, enabled: true },
  // { name: "Map", href: "/map", icon: Map, enabled: false },
  { name: "Education", href: "/education", icon: GraduationCap, enabled: true },
  { name: "Employment", href: "/employment", icon: Briefcase, enabled: true },
  // { name: "Health", href: "/health", icon: Heart, enabled: false },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div className="hidden border-r bg-card/50 backdrop-blur-sm md:block md:w-64">
      <div className="flex h-full flex-col">
        <div className="p-6">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-[#60A5FA] to-[#F472B6] bg-clip-text text-transparent">
            Unified Social Registry
          </h2>
          <p className="text-sm text-muted-foreground">Management Dashboard</p>
        </div>
        <div className="flex-1 space-y-1 p-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <div key={item.name}>
                {item.enabled ? (
                  <Link to={item.href}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-[#60A5FA]/20 text-[#60A5FA] font-medium"
                            : "text-muted-foreground hover:bg-[#60A5FA]/10 hover:text-foreground"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="sidebar-active"
                            className="ml-auto h-1 w-1 rounded-full bg-[#60A5FA]"
                          />
                        )}
                      </div>
                    </motion.div>
                  </Link>
                ) : (
                  <div
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground opacity-50 cursor-not-allowed"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    <span className="ml-auto text-xs">(Coming Soon)</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}