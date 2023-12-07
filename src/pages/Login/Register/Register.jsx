import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const {createUser, updateProfile} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
        .then((userCredential) => {
            form.reset()
            toast('Successfully SingUp')
            const user = userCredential.user
            console.log(user);
        })
        updateProfile(name, photoURL)
        .then(user => {
          toast('Profile Updated')
            console.log('Profile Updated', user);
        })
        .catch(error => {
            console.log('User created failed', error);
        })
    }
  return (
    <div className="ml-8 col-span-10">
    <div className="Card w-96 bg-base-200 shadow-xl mx-auto p-8 mt-8 rounded-3xl">
      <Toaster/>
          <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photoURL"
                className="input input-bordered"
                required
              />
            </div>
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
                placeholder="password"
                name="password"
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
              <button className="btn btn-primary">Register</button>
              <small className="mt-2 text-center">Already Have an account? <Link to='/login' className="text-orange-500 underline underline-offset-4">Login here</Link></small>
            </div>
          </form>
      </div>
    </div>
  );
};

export default Register;
