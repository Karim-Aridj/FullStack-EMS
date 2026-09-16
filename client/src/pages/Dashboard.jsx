import { useEffect, useState } from "react"
import { dummyAdminDashboardData, dummyEmployeeDashboardData } from "../assets/assets"
import Loading from "../components/Loading"
import EmployeeDashboard from "../components/EmployeeDashboard"
import AdminDashboard from "../components/AdminDashboard"

const Dashboard = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
{/** we will get some data that will be the dashboard data, its already added
  in the assets, we will store this data in one state.
  the state name is data and setData will update it.the initial value will be null using useState
  and then we add data loaign with setData by default true. so initialy when 
  we open the page the loading will be true and it will get false
  after loading data.

  when we load the page we have to get the data so we add useEffect and provie an empty array wich will be dependency
  */}

  useEffect(()=>{
    setData(dummyAdminDashboardData)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
{/**we have added this timeout to display the loading for 1 second because
  a fraction of second to load the data from teh asset which is the dummydata
  thats why we added setTimout*/}
  {/** if loading true we add the return loading text, but later we will add the loading component*/}
  if(loading) return <Loading />
  if(!data) return <p className="text-center text-slate-500 py-12">Failed to Load Dashboard</p>
  
  if(data.role === "ADMIN"){
    return <AdminDashboard data={data}/>
    {/**here instead of the text admin dashboard we will import actual data by 
      creating a componeent Admin and EmployeeDashboard.jsx */}
  }else{
    return <EmployeeDashboard data={data}/>
  }


  
}

export default Dashboard