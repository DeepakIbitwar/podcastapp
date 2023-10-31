import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/common/Loader";

function Profile() {
  const user = useSelector((state) => state.user.user);

  console.log("My User", user);
  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };
  console.log(user)

  return (
    <div>
      <Header />
      <div className="pro-log">
      <div className="data-log">
      <div className="profile-data">
      <h2 >Your Profile Data</h2>
      <p>Your Log In Name : {user.name}</p>
      <p>Your Log In Email Id  : {user.email}</p>
      <p>Your UID Number : {user.uid}</p>
      
      </div>

      <button className="log-btn" onClick={handleLogout}>Logout</button>
      
      
      
      </div>
      </div>
      
      
    </div>
  );
}

export default Profile;
