import React, { useState } from "react";
import img from "../../assets/p1.png";
import backgroundImage from "../../assets/bg4.jpg";
import { Link, useNavigate } from "react-router-dom";
import message from "../../assets/msgicon.png"
import axios from '../../axios';

function Profile() {
  const [myData, setMyData ] = useState({});
  const navigate = useNavigate();
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`http://localhost:8000/api/profile/getProfile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json()
    // setNotes(json)
  }
  const handleRecommend = ()=> {
    navigate("/recommendation")
  }

  return (
    <div style={{backgroundImage: `url(${backgroundImage})`,backgroundSize:"cover"}} className="font-libre h-[90vh] text-gray-900 flex justify-center">
      <div className="grid grid-cols-2 pt-10">
        <div className="border-2 border-black h-fit w-96 pb-3 mx-4 ml-0 rounded-2xl">
          {/* <div onClick={handleRecommend} className="p-5 text-xl font-semibold text-white">Recommedation</div> */}
          <div className="mx-8">
          <Link to="/recommendation"><button className="mt-6 tracking-wide font-semibold bg-[#5f3e82] text-gray-100 w-full py-3 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
            <span className="ml-3">Find Your Perfect Date Now!</span>
          </button></Link>
          <Link to="/rating"><div className="p-5 text-xl font-semibold text-white">Past Dates</div></Link>
          <Link to="/profileform"><div className="p-5 text-xl font-semibold text-white">Edit Profile</div></Link>
          <Link to="/profileform"><div className="p-5 text-xl font-semibold text-white">Personal Information</div></Link>
          <Link to="/contact"><div className="p-5 text-xl font-semibold text-white">Any Trouble!</div></Link>

          <Link to="/login"><div className="p-5 text-xl font-semibold text-white">Delete Account</div></Link>
          <Link to="/login"><div className="p-5 text-xl font-semibold pb-5 text-white">Logout</div></Link>
          </div>
        </div>
        <div class="group border-2 border-black h-fit rounded-2xl mr-9 p-4">
          <img class="shrink-0 h-40 w-40 rounded-full" src={img} alt="" />
          <div class="ltr:ml-3 rtl:mr-3">
            <p class="font-medium text-white text-xl pt-2 pl-6">Jainil Shah</p>
          </div>
          <div className="grid grid-cols-2 pt-5">
            <div>
              <div className="p-3 border-t-2 text-white">Name</div>
              <div className="p-3 border-t-2 text-white">Age</div>
              <div className="p-3 border-t-2 text-white">Sex</div>
              <div className="p-3 border-t-2 text-white">Location</div>
              <div className="p-3 border-t-2 text-white">Dates Count</div>
            </div>
            <div>
              <div className="p-3 border-t-2 text-white">Jainil</div>
              <div className="p-3 border-t-2 text-white">20</div>
              <div className="p-3 border-t-2 text-white">Male</div>
              <div className="p-3 border-t-2 text-white">India</div>
              <div className="p-3 border-t-2 text-white">8</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
