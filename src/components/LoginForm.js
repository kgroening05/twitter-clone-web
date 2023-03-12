import { Link } from "react-router-dom"
import { googleAuth } from "../utils.js/apiCalls"
import './LoginForm.css'
export default function LoginForm() {
  return (
    <section className="login">
        <h2>New to Twitter?</h2>
        <p>Sign up now to get your own personalized timeline!</p>
        <Link to={googleAuth}><button>Sign In With Google</button></Link>
        <Link to={'/'}><button>Sign In With Apple</button></Link>
        <Link to={'/'}><button>Sign In With Github</button></Link>
        <Link to={'/'}><button>Create Account</button></Link>
        <p>
          By signing up, you agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>
          , including <a href="">Cookie Use</a>.
        </p>
    </section>
  )
}