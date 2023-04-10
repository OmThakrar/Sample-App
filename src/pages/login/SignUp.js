import React, { useState } from "react";
import logo from "../../assets/logo.png";
import login from "../../assets/login_bg.png";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import axios from '../../axios';
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  // const [username, setUsername] = useState();
  // const [secret, setSecret] = useState();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const InputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const user = {email: input.email, password : input.password ,username:input.username}
    // console.log(user);
    // setUsername(user.username)
    // setSecret(user.password)
    // console.log("username ",username)
    // console.log("setSecret ",secret)
    // axios
    //   .post("http://localhost:8000/api/chat/signup", {
    //     username,
    //     secret,
    //   })
    //   .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
    //   .catch((e) => console.log(JSON.stringify(e.response.data)));
 
    try {
      if(user){
        const res = await axios.post("/user/signup", user);
        console.log(res.data);
        localStorage.setItem("token",res.data.token)
        console.log(res.data.token);
        navigate("/login")
      }
    }catch(error) {
      console.log("error form content", error)
    }

    setInput({
      username: "",
      email: "",
      password: "",
      cpassword:""
    });
  };
  return (
    <>
      <form onSubmit={SubmitHandler}>
        <div style={{backgroundImage: `url(${login})`,backgroundSize:"cover"}} className="font-libre h-screen text-gray-900 flex justify-center">
          <div className="rounded-3xl">
            <div className=" ">
              <div>
                <img src={logo} className="mx-auto mt-8 transform hover:scale-125 transition duration-500 h-32 w-72" alt="" />
              </div>
              <div className="mt-10 flex flex-col items-center">
                <h1 className="text-2xl font-extrabold text-poppins text-white">
                  Sign Up with VHookup
                </h1>
                <div className="w-full flex-1 mt-5">
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-xs transform hover:scale-110 transition duration-500">
                      <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-black text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                        <div className="bg-white p-3 rounded-full">
                          <img className="w-4 transform hover:scale-150 transition duration-500" src={google} alt="" />
                        </div>
                        <span className="ml-4">Sign Up with Google</span>
                      </button>
                    </div>
                    
                    <div className="w-full max-w-xs transform hover:scale-110 transition duration-500">
                    <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-black text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                      <div className="bg-white p-2 rounded-full">
                        <img className="w-6 transform hover:scale-150 transition duration-500" src={github} alt="" />
                      </div>
                      <span className="ml-4">Sign Up with GitHub</span>
                    </button>
                    </div>
                    
                  </div>

                  <div className="my-3 text-center">
                    <div className="leading-none px-2 inline-block text-lg  tracking-wide font-medium text-white transform translate-y-1/2">
                      Or Sign Up with email
                    </div>
                  </div><br></br>

                  <div className="mx-auto mt-2 max-w-xs">
                    <input
                      name="username"
                      className="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Username"
                      value={input.username}
                      onChange={InputHandler}
                      required
                    />
                    <input
                      name="email"
                      className="w-full px-8 py-2 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                      value={input.email}
                      onChange={InputHandler}
                      required
                    />
                    <input
                      name="password"
                      className="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                      value={input.password}
                      onChange={InputHandler}
                      required
                    />
                    <input
                      name="cpassword"
                      className="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Confirm Password"
                      value={input.cpassword}
                      onChange={InputHandler}
                      // required
                    />
                    <button className="mt-3 tracking-wide font-semibold bg-[#5f3e82] text-gray-100 w-full py-3 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      {/* <img className="fill-white w-4 h-4 " "" /> */}
                      <span className="ml-3">Sign Up</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
