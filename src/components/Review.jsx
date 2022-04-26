import PropTypes from "prop-types";
import React from "react";

import gift from "../assets/gift.svg";
import star from "../assets/star.svg";
import eStar from "../assets/estar.svg";
import bmc from "../assets/bmc.svg";
import bmccup from "../assets/bmc-cup.svg";

import ratePlatform from "../methods/ratePlatform";
import rateMovie from "../methods/rateMovie";

export default function Review({ searchTerm }) {
  if (!searchTerm) {
    searchTerm = "Iron Man 2";
  }

  function changeStar(e) {
    var id = e.target.id;
    var stars = document.getElementsByClassName("mstar");
    var num = id.slice(-1);
    num = parseInt(num);
    // change src of first num stars to star
    for (var i = 0; i < 5; i++) {
      if (i < num) {
        stars[i].src = star;
      } else {
        stars[i].src = eStar;
      }
    }
  }
  function changeStarm(e) {
    var id = e.target.id;
    var stars = document.getElementsByClassName("mpstar");
    var num = id.slice(-1);
    num = parseInt(num);
    // change src of first num stars to star
    for (var i = 0; i < 5; i++) {
      if (i < num) {
        stars[i].src = star;
      } else {
        stars[i].src = eStar;
      }
    }
  }
  function setDefaultStars() {
    var stars = document.getElementsByClassName("mstar");
    for (var i = 0; i < 5; i++) {
      if (i < 3) {
        stars[i].src = star;
      } else {
        stars[i].src = eStar;
      }
    }
  }
  function setDefaultStarsm() {
    var stars = document.getElementsByClassName("mpstar");
    for (var i = 0; i < 5; i++) {
      if (i < 3) {
        stars[i].src = star;
      } else {
        stars[i].src = eStar;
      }
    }
  }
  function setPlatformRating(e) {
    ratePlatform(e.target.id);
    // document.getElementById("plat-stars").innerText = "";
    setTimeout(() => {
      document.getElementById("plat-stars").innerText =
        "Thank you for your feedback";
    }, 2000);
  }
  function setMovieRating(e) {
    rateMovie(searchTerm, e.target.id);

    e.target.onmouseout = null;

    // document.getElementById("movie-stars").innerText = "";
    setTimeout(() => {
      document.getElementById("movie-stars").innerText =
        "Thank you for your feedback about the movie";
    }, 2000);
  }

  return (
    <>
      <div className=" font-Poppins z-50 mx-auto  flex w-full flex-col bg-gradient-to-tl from-indigo-900 to-purple-900">
        <h1 className="mdm:text-2xl my-4 py-4 text-center text-5xl font-extrabold capitalize text-white">
          Thanks for Visiting Us
        </h1>
        <div className="mdm:flex-col mdm:mx-auto mdm:gap-20 my-16 mx-4 flex justify-evenly">
          <div className="group relative flex h-max w-[25%] min-w-[260px] flex-col gap-4 self-center rounded-2xl bg-[#CD1818] p-6 text-white shadow-none shadow-slate-700 transition-all duration-500 ease-in-out hover:bg-[#ff3939] hover:shadow-2xl">
            <img
              src={gift}
              alt=""
              className="absolute  right-0 -top-16 w-[120px] transition-all duration-500 ease-in-out group-hover:scale-[1.3]"
              draggable="false"
            />
            <h2 className="unselectable mt-[60px] h-24 text-xl font-semibold">
              Did you like our movie recomendation ?
            </h2>
            <p className="unselectable text-center text-lg font-light italic">
              Rate your experience
            </p>
            <div
              className="my-8 flex justify-center gap-4 font-bold text-green-500"
              id="plat-stars"
            >
              <img
                id="mstar1"
                src={star}
                className="unselectable mstar  h-5 w-5"
                onMouseOver={(e) => {
                  changeStar(e);
                }}
                onMouseOut={() => {
                  setDefaultStars();
                }}
                onClick={(e) => {
                  setPlatformRating(e);
                }}
                draggable="false"
                alt="ratings-stars"
              />
              <img
                id="mstar2"
                src={star}
                className="unselectable mstar  h-5 w-5"
                onMouseOver={(e) => {
                  changeStar(e);
                }}
                onMouseOut={() => {
                  setDefaultStars();
                }}
                onClick={(e) => {
                  setPlatformRating(e);
                }}
                draggable="false"
                alt="ratings-stars"
              />
              <img
                id="mstar3"
                src={star}
                className="unselectable mstar  h-5 w-5"
                onMouseOver={(e) => {
                  changeStar(e);
                }}
                onMouseOut={() => {
                  setDefaultStars();
                }}
                onClick={(e) => {
                  setPlatformRating(e);
                }}
                draggable="false"
                alt="ratings-stars"
              />
              <img
                id="mstar4"
                src={eStar}
                className="unselectable mstar  h-5 w-5"
                onMouseOver={(e) => {
                  changeStar(e);
                }}
                onMouseOut={() => {
                  setDefaultStars();
                }}
                onClick={(e) => {
                  setPlatformRating(e);
                }}
                draggable="false"
                alt="ratings-stars"
              />
              <img
                id="mstar5"
                src={eStar}
                className="unselectable mstar  h-5 w-5"
                onMouseOver={(e) => {
                  changeStar(e);
                }}
                onMouseOut={() => {
                  setDefaultStars();
                }}
                onClick={(e) => {
                  setPlatformRating(e);
                }}
                draggable="false"
                alt="ratings-stars"
              />
            </div>
          </div>
          <div className="group relative flex w-[25%] min-w-[260px] flex-col gap-4 self-center rounded-2xl bg-[#CD1818] p-6 text-white shadow-none shadow-slate-700 transition-all duration-500 ease-in-out hover:bg-[#ff0000] hover:shadow-2xl">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/tree.webp`}
              alt=""
              className="absolute  right-0 -top-16 w-[120px] transition-all duration-500 ease-in-out group-hover:scale-[1.3]"
              draggable="false"
            />
            <h2 className="unselectable mt-[60px] h-24 text-xl font-semibold">
              How good can you rate the movie {searchTerm} ?
            </h2>
            <p className="unselectable text-center text-xl font-light italic">
              Rate your experience
            </p>
            <div
              className="my-8 flex justify-center gap-4 font-bold text-green-500"
              id="movie-stars"
            >
              <img
                id="mpstar1"
                src={star}
                className="unselectable mpstar  h-5 w-5"
                onMouseOver={(e) => {
                  changeStarm(e);
                }}
                onMouseOut={() => {
                  setDefaultStarsm();
                }}
                onClick={(e) => {
                  setMovieRating(e);
                }}
                draggable="false"
                alt="ratings-stars"
              />
              <img
                id="mpstar2"
                src={star}
                className="unselectable mpstar  h-5 w-5"
                onMouseOver={(e) => {
                  changeStarm(e);
                }}
                onMouseOut={() => {
                  setDefaultStarsm();
                }}
                onClick={(e) => {
                  setMovieRating(e);
                }}
                draggable="false"
                alt="ratings-stars"
              />
              <img
                id="mpstar3"
                src={star}
                className="unselectable mpstar  h-5 w-5"
                onMouseOver={(e) => {
                  changeStarm(e);
                }}
                onMouseOut={() => {
                  setDefaultStarsm();
                }}
                onClick={(e) => {
                  setMovieRating(e);
                }}
                draggable="false"
                alt="ratings-stars"
              />
              <img
                id="mpstar4"
                src={eStar}
                className="unselectable mpstar  h-5 w-5"
                onMouseOver={(e) => {
                  changeStarm(e);
                }}
                onMouseOut={() => {
                  setDefaultStarsm();
                }}
                onClick={(e) => {
                  setMovieRating(e);
                }}
                draggable="false"
                alt="ratings-stars"
              />
              <img
                id="mpstar5"
                src={eStar}
                className="unselectable mpstar  h-5 w-5"
                onMouseOver={(e) => {
                  changeStarm(e);
                }}
                onMouseOut={() => {
                  setDefaultStarsm();
                }}
                onClick={(e) => {
                  setMovieRating(e);
                }}
                draggable="false"
                alt="ratings-stars"
              />
            </div>
          </div>
        </div>
        <div className="mdm:flex-col group mx-auto  mb-4   flex w-[60%] justify-between rounded-2xl bg-[#00E0FF] p-6 text-white shadow-none shadow-slate-700 transition-all duration-500 ease-in-out hover:bg-[#3ee1f6] hover:shadow-2xl">
          <div className=" p-4 font-semibold leading-8 tracking-wide text-black md:mx-6 ">
            <img src={bmc} alt="bmc-logo" draggable="false" />
            <p className="unselectable mdm:text-sm italic">
              Support us by buying us a coffee,
            </p>
            <p className="unselectable mdm:hidden italic">
              You will also get discounts on our various projects.
            </p>
          </div>
          <div
            id="support"
            className="mdm:w-full my-auto mx-auto h-full sm:mx-6"
          >
            {/* <a href="https://www.buymeacoffee.com/suryateja" target="_blank"> */}
            <img
              src={bmccup}
              alt="bmc-cup"
              className="cursor-pointer transition-all duration-500 ease-in-out group-hover:scale-[1.2]"
              onClick={() => {
                window.open("https://www.buymeacoffee.com/suryateja", "_blank");
              }}
            />
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

Review.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
