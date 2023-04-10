import React from "react";
import bgImage from "../assets/bg4.jpg";

function Profileform() {
  return (
    <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }} className="font-libre text-gray-900 flex justify-center">
      <div className=" mt-5 ">
        <div className=" sm:m-10 pb-10 rounded-3xl ">
          <form className="items-center space-x-6 ">
            <span className="font-bold text-xl flex justify-center mb-5 text-white">Personal Information</span>
            <div className="grid grid-cols-6">
              <div></div>
              <div></div>
              <div>
                <div className="py-5">
                  <label className="text-xl font-semibold text-white">Name:</label>
                </div>
                <div className="py-5">
                  <label className="text-xl font-semibold text-white">Age:</label>
                </div>
                <div className="py-5">
                  <label className="text-xl font-semibold text-white">Gender:</label>
                </div>
                <div className="py-5">
                  <label className="text-xl font-semibold text-white">Location:</label>
                </div>
                <div className="py-5">
                  <label className="text-xl font-semibold text-white">Photo:</label>
                </div>
              </div>
              <div>
                <input
                  name="name"
                  className="mb-6 w-56 px-8 py-2 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="name"
                  // value={input.email}
                  // onChange={InputHandler}
                  required
                />
                <input
                  name="age"
                  className="mb-7 w-56 px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="Text"
                  placeholder="Age"
                  // value={input.password}
                  // onChange={InputHandler}
                  required
                />
                <input
                  type="radio"
                  name="Gender"
                  value="female"
                  className="ml-2"
                />
                <label className="mr-3 text-white">Female</label>
                <input
                  type="radio"
                  name="Gender"
                  value="male"
                  className="ml-2"
                />
                <label className="mr-3 text-white">Male</label>
                <input
                  name="Location"
                  className="mb-7 w-56 px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="Text"
                  placeholder="Location"
                  // value={input.password}
                  // onChange={InputHandler}
                  required
                />
                <label className="block">
                  {/* <span className="sr-only">Choose file</span> */}
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100 mb-10"
                  />
                </label>
              </div>
              <div></div>
            </div>
          </form>
          <span className="mb-6 font-bold text-white text-xl flex justify-center">
            Interest
          </span>
          <div className="grid grid-cols-6 gap-2">
            <div></div>
            <div></div>
            <div>
              <ul className="w-56 text-xl mb-3 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="vue-checkbox"
                      className="w-full py-3 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                    >
                      Sing
                    </label>
                  </div>
                </li>
              </ul>
              <ul className="w-56 text-xl mb-3 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="react-checkbox"
                      className="w-full py-3 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                    >
                      Dance
                    </label>
                  </div>
                </li>
              </ul>
              <ul className="w-56 text-xl mb-3 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="angular-checkbox"
                      type="checkbox"
                      value=""
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="angular-checkbox"
                      className="w-full py-3 ml-2 text-xl font-medium text-blue-500 dark:text-gray-300"
                    >
                      Alcohol
                    </label>
                  </div>
                </li>
              </ul>
              <ul className="w-56 text-xl mb-3 mr-3 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                    >
                      Smoke
                    </label>
                  </div>
                </li>b
              </ul>
              <ul className="w-56 text-xl mb-3 mr-3 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                    >
                      Traveling
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="w-56 text-xl mb-3 mr-3 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                    >
                      Exercise
                    </label>
                  </div>
                </li>
              </ul>
              <ul className="w-56 text-xl mb-3 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="vue-checkbox"
                      className="w-full py-3 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                    >
                      Netflix and Chill
                    </label>
                  </div>
                </li>
              </ul>
              <ul className="w-56 mb-3 text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="react-checkbox"
                      className="w-full py-3 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                    >
                      Music
                    </label>
                  </div>
                </li>
              </ul>
              <ul className="w-56 mb-3 text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="angular-checkbox"
                      type="checkbox"
                      value=""
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="angular-checkbox"
                      className="w-full py-3 ml-2 text-xl font-medium text-blue-500 dark:text-gray-300"
                    >
                      Sports
                    </label>
                  </div>
                </li>
              </ul>
              <ul className="w-56 text-xl mb-3 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                    >
                      New Cuisines
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profileform;
