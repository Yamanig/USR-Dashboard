import { Bell, Settings, User } from "lucide-react"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { motion } from "framer-motion"

export function Header() {
  const { setTheme } = useTheme()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-[#60A5FA]/20 via-background to-[#F472B6]/20 backdrop-blur-sm"
    >
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#F472B6] bg-clip-text text-transparent">
            Unified Social Registry
          </h1>
          <nav className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection('overview')}
              className="text-muted-foreground hover:text-foreground hover:bg-[#60A5FA]/10"
            >
              Overview
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection('analytics')}
              className="text-muted-foreground hover:text-foreground hover:bg-[#60A5FA]/10"
            >
              Analytics
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection('reports')}
              className="text-muted-foreground hover:text-foreground hover:bg-[#60A5FA]/10"
            >
              Reports
            </Button>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="relative hover:bg-[#60A5FA]/10">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#60A5FA]" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="hover:bg-[#60A5FA]/10">
              <Settings className="h-4 w-4" />
            </Button>
          </motion.div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="hover:bg-[#60A5FA]/10">
                  <User className="h-4 w-4" />
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light Mode
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark Mode
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System Mode
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  )
}