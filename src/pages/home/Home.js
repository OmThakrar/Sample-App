import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Home.jpg";
import Startdat from "../../components/Startdat";

const Home = () => {
  return (
    <>
  
      <div
        className="h-screen"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
        {/* <div className="text-right h-full">Find your match, ignite the spark!</div> */}
        <div className="max-h-screen bg-hero text-gray-900 flex justify-center z-50 float-right mt-32 mr-12">
          <div className="max-w-screen-md m-0 sm:mb-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-4">
              <span className="text-purple-700 font-bold font-mono">
                Welcome to VHookUp
              </span>
              <p>
              Are you tired of swiping left and right on dating apps, hoping to find your perfect match? Look no further!
              </p><br></br>
              <div>
                <div className="flex items-center space-x-2 text-base">
                  <h4 className="font-semibold text-slate-900">Active Users</h4>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                    204
                  </span>
                </div>
                <div className="mt-3 flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-sm font-medium">
                  <Link to="/" className="text-blue-500">
                    + 198 others
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[#D4D9F6] sm:rounded-xl hidden lg:flex rounded-2
            xl">
              <div className="xl:m-5 w-full bg-contain bg-center bg-no-repeat items-center ">
                <div className="text-black mb-3">Find Your True Love</div>
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                  <div>
                    <span>I am a</span>
                    <form className="w-36">
                      <fieldset>
                        <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg ">
                          <label for="frm-whatever" className="sr-only">
                            My field
                          </label>
                          <select
                            className="appearance-none w-full py-1 px-2 bg-white"
                            name="whatever"
                            id="frm-whatever"
                          >
                            <option value="">Male</option>
                            <option value="1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Female</option>
                            <option value="2">Others</option>

                          </select>
                          <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div>
                    <span>Age</span>
                    <form className="w-36">
                      <fieldset>
                        <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg ">
                          <label for="frm-whatever" className="sr-only">
                            My field
                          </label>
                          <select
                            className="appearance-none w-full py-1 px-2 bg-white"
                            name="whatever"
                            id="frm-whatever"
                          >
                            <option value="">18</option>
                            <option value="1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">19</option>
                            <option value="2">20</option>
                            <option value="2">21</option>
                            <option value="2">22</option>
                            <option value="2">23</option>
                            <option value="2">24</option>
                            <option value="2">25</option>
                            <option value="2">26</option>
                            <option value="2">27</option>
                            <option value="2">28</option>
                            <option value="2">29</option>
                            <option value="2">30</option>
                            <option value="2">31</option>
                            <option value="2">32</option>
                            <option value="2">33</option>
                            <option value="2">34</option>

                          </select>
                          <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div>
                    <span>Looking for</span>
                    <form className="w-36">
                      <fieldset>
                        <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg ">
                          <label for="frm-whatever" className="sr-only">
                            My field
                          </label>
                          <select
                            className="appearance-none w-full py-1 px-2 bg-white"
                            name="whatever"
                            id="frm-whatever"
                          >
                            <option value="">Male</option>
                            <option value="1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Female</option>
                            <option value="2">Others</option>

                          </select>
                          <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div>
                    <span>Country</span>
                    <form className="w-36">
                      <fieldset>
                        <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg ">
                          <label for="frm-whatever" className="sr-only">
                            My field
                          </label>
                          <select
                            className="appearance-none w-full py-1 px-2 bg-white"
                            name="whatever"
                            id="frm-whatever"
                          >
                            <option value="">India</option>
                            <option value="1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Australia</option>
                            <option value="2">Japan</option>
                            <option value="2">China</option>
                            <option value="2">Pakistan</option>
                            <option value="2">Russia</option>

                          </select>
                          <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            
      </div>
      {/* page2 */}
      <Startdat />
    </>
  );
};

export default Home;
