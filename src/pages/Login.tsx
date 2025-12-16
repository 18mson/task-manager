import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem("auth", "true")
    navigate("/")
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}