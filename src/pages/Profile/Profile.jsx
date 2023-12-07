import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
  return (
    <div className="ml-8 col-span-10">
      <h2 className="text-2xl font-bold">
        Profile: <span className="text-orange-300">{user?.displayName}</span>
      </h2>
      <div className="card w-96 bg-base-200 shadow-xl mx-auto p-8 mt-8">
        <div className="avatar mx-auto">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title mx-auto">
            {user?.displayName}
          </h2>
          <p className="text-center">{user?.email}</p>
          <button className="px-0 py-2 mt-4 btn btn-primary">Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
