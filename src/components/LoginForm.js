import { Link } from "react-router-dom"
import { googleAuth } from "../utils.js/apiCalls"
export default function LoginForm() {
  return (
    <section className="login">
        <Link to={googleAuth}><button>Sign In With Google</button></Link>
        <Link to={'/'}><button>Sign In With Apple</button></Link>
        <Link to={'/'}><button>Sign In With Github</button></Link>
        <Link to={'/'}><button>Create Account</button></Link>
    </section>
  )
}