import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from './components/layout/dashboard-layout'
import DashboardPage from './pages/dashboard'
import EducationPage from './pages/education'
import EmploymentPage from './pages/employment'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="employment" element={<EmploymentPage />} />
      </Route>
    </Routes>
  )
}