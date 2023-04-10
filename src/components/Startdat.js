import React from "react";
import img1 from "../assets/love.png"
import img2 from "../assets/girl.png"
import img3 from "../assets/couple.png"
import greenline from "../assets/greenLine.svg";
import { Link } from "react-router-dom";

function Startdat() {
  return (
    <div>

      <div className="bg-gradient-to-tr pb-8 from-[#f2997b] via-[#a571c4] to-[#b45695] ">
        {/* roadmap */}
        <span className="text-3xl text-white text-bold flex justify-center pt-9 mb-9">Find your SoulMate</span>
        <div className="row grid lg:grid-cols-11">
          <div className="lg:col-span-5">
            <div className="row">
              <div className="lg:pl-0 pl-4">
                {/* <p className="text-3xl">13TH OCT</p> */}
                <p className="text-white mt-5 text-3xl flex justify-center">
                  Create Profile
                </p>
                <p className="pe-2 mr-4 text-justify text-lg mt-2 ml-6">
                Hello! I'm someone who believes in taking charge of my own happiness and making the most of every moment. I'm not waiting for the perfect time or the perfect person to come along - I believe in creating my own happily ever after, and I'm looking for someone who shares that philosophy. I'm a firm believer in the power of laughter, love, and adventure, and I'm on the lookout for someone who is ready to join me on that journey. 
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 lg:block hidden">
            <div className="row mt-4">
              <img src={img2} className="absolute h-20 border-4 border-black rounded-full" alt="" />
            </div>
            <div className="row">
              <img src={greenline} className="pl-9 mt-5" alt="" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="row">

            </div>
          </div>
        </div>

        <div className="row grid lg:grid-cols-11 lg:mt-0 mt-8">
          <div className="col-span-5">
          </div>
          <div className="lg:col-span-1 lg:block hidden">
            <div className="row">
              <img src={img1} className="absolute h-20 border-4 rounded-full border-black" alt="" />
            </div>
            <div className="row">
              <img src={greenline} className="pl-9 mt-12" alt="" />
            </div>
          </div>
          <div className="col-span-5">
            <div className="row">
              {/* <p className="text-3xl text-right lg:pr-20 mr-4"></p> */}
              <p className="text-white mt-5 text-4xl text-right lg:pr-20 mr-4 flex justify-center">
                Find match
              </p>
              <p className="pl-2 ml-4 text-justify text-lg mt-4 lg:pr-20 mr-4">
              Hello there! I'm on the lookout for my ideal match - someone who loves to laugh, explore new places and experiences, and most importantly, someone who is ready to share a lifetime of love and happiness. I believe that a great relationship is built on trust, mutual respect, and a willingness to grow together. I'm looking for someone who shares these values and is ready to embark on an exciting journey with me. So if you're someone who's kind, adventurous, and looking for something real, let's get to know each other and see where this journey takes us!
              </p>
            </div>
          </div>
        </div>

        <div className="row grid lg:grid-cols-11 lg:mt-0">
          <div className="col-span-5">
            <div className="row">
              <div className="lg:pl-0 pl-4">
                {/* <p className="text-3xl">18TH OCT</p> */}
                <p className="text-white mt-0 text-4xl flex justify-center">Start Dating</p>
                <p className="pe-2 mr-4 mt-2 text-lg ml-6">
                Dating can be a daunting experience, but it doesn't have to be! Our dating page is designed to make it easy for you to connect with other like-minded individuals who are also searching for love and companionship. Whether you're looking for a serious relationship or just a casual fling, our platform offers a safe and secure environment where you can explore your options and get to know other singles.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 lg:block hidden">
            <div className="row">
              <img src={img3} className="absolute h-20 border-4 rounded-full border-black" alt="" />
            </div>
          </div>
          <div className="col-span-5">

          </div>
        </div>

      </div>
    </div>
  );
}

export default Startdat;
