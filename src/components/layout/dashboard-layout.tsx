import { Outlet } from 'react-router-dom'
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { Footer } from "./footer"

export function DashboardLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className="flex h-[calc(100vh-7rem)]">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}