import { Link } from "react-router-dom"
import LoginLeftSide from "./LoginLeftSide"
import { ArrowLeftIcon } from "lucide-react"

const LoginForm = ({role, title, subtitle}) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />
      <div className="w-full max-w-md animate-fade-in">
        <Link to="/login" className="inline-flex items-center
        gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10
        transtition-colors">
           <ArrowLeftIcon size={16}/> Back to Portals

        </Link>
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-medium
          texr-zinc-800">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

    </div>
  )
}

export default LoginForm