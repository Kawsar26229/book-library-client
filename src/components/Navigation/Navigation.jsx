import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navigation = () => {
  const {logOut, user} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then(result => {
      console.log('Successfully Logged Out', result)
    })
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to='/' className="btn btn-ghost text-xl">Book Library</Link>
        </div>
        <div className="navbar-end">
          {user ? <button className="btn btn-primary" onClick={handleLogOut}>Logout</button> : <Link to='/login' className="btn btn-primary">Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
