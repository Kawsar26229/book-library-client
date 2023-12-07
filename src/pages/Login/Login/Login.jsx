import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
        .then((userCredential) => {
          navigate(from, { replace: true });
          const user = userCredential.user
          toast('Login Successful')
            console.log(user);
        })
        .then(error => {
            console.log('User Login failed',error);
        })
    }
  return (
    <div className="ml-8 col-span-10">
    <div className="Card w-96 bg-base-200 shadow-xl mx-auto p-8 mt-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <small className="mt-2 text-center">Not a member yet? <Link to='/register' className="text-orange-500 underline underline-offset-4">Register</Link></small>
            </div>
          </form>
      </div>
    </div>
  );
};

export default Login;
