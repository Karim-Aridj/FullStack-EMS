import { Layout, Settings } from "lucide-react"
import { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Employees from "./pages/Employees"
import Attendance from "./pages/Attendance"
import Leave from "./pages/Leave"
import Payslips from "./pages/Payslips"
import LoginLanding from "./pages/LoginLanding"
import PrintPayslip from "./pages/PrintPayslip"
export const App = () => {
  return (
    <>
    <Toaster />
    <Routes>
      <Route path="/login" element={ <LoginLanding/>}/>
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/leave" element={<Leave/>}/>
        <Route path="/payslips" element={<Payslips/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Route>
      <Route path="/print/payslips/:id" element={ <PrintPayslip/>}/>

      <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
    </Routes>

    </>
  )
}

export default App