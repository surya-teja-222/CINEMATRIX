// react components
import React, { useEffect, useState, lazy, Suspense } from "react";

// Images

import tech from "./assets/Technology.gif";
import scalability from "./assets/scalability.svg";

// JSX COMPONENTS
import Hero from "./hero";

// methods
import fetchh from "./methods/fetchh";

const Review = lazy(() => import("./components/Review"));
const Footer = lazy(() => import("./components/Footer"));
const Main = lazy(() => import("./components/main"));

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    document
      .querySelector("#hero_input")
      .addEventListener("keyup", async (e) => {
        if (e.target.value.length > 0) {
          document.getElementById("bottom_desktop").classList.add("opacity-0");
          document.getElementById("bottom_mobile").classList.add("opacity-0");
          var k = await fetchh(e.target.value);
          if (k !== suggestions && k.length > 0) {
            setSuggestions(k);
          }
          if (e.keyCode === 13) {
            setSearchTerm(e.target.value);
            document.querySelector("#main_search").scrollIntoView({
              behavior: "smooth",
            });
            document
              .getElementById("bottom_desktop")
              .classList.remove("opacity-0");
            document
              .getElementById("bottom_mobile")
              .classList.remove("opacity-0");
          }
        } else {
          document
            .getElementById("bottom_desktop")
            .classList.remove("opacity-0");
          document
            .getElementById("bottom_mobile")
            .classList.remove("opacity-0");
        }
      });
  }, []);

  useEffect(() => {
    k = process.env.REACT_APP_URL + "?movie=test";
    var k = fetch(k);
  }, []);

  useEffect(() => {
    function move() {
      setTimeout(() => {
        // check if user is on this tab
        if (document.hidden) {
          move();
        } else {
          const offset = 1;
          const slides = document.querySelector("[data-slides]");
          const activeSlide = slides.querySelector("[data-active]");
          let newIndex = [...slides.children].indexOf(activeSlide) + offset;
          if (newIndex < 0) newIndex = slides.children.length - 1;
          if (newIndex >= slides.children.length) newIndex = 0;
          slides.children[newIndex].dataset.active = true;
          delete activeSlide.dataset.active;
          move();
        }
      }, 2500);
    }
    move();
  }, []);

  return (
    <div className="cursor-white">
      <div className="absolute -z-50 h-screen w-full overflow-x-hidden">
        <section aria-label="Newest Photos">
          <div className="carousel" data-carousel>
            <ul data-slides>
              <li className="slide" data-active>
                <img
                  src={`${process.env.REACT_APP_STORAGE}LandingBg/korean.webp`}
                  alt="Korean bg"
                  className="h-full w-full"
                  draggable="false"
                />
              </li>
              {images()}
              <li className="slide">
                <img
                  src={`${process.env.REACT_APP_STORAGE}LandingBg/dc.webp`}
                  alt="DC bg"
                  className="h-full w-full"
                  draggable="false"
                  loading="lazy"
                />
              </li>
              <li className="slide">
                <img
                  src={`${process.env.REACT_APP_STORAGE}LandingBg/frozen.webp`}
                  alt="frozen bg"
                  className="h-full w-full"
                  draggable="false"
                  loading="lazy"
                />
              </li>
            </ul>
          </div>
        </section>
        <img
          src={`${process.env.REACT_APP_STORAGE}assets/landing-bottom-desktop.webp`}
          className="bottom_desktop mdm:hidden absolute bottom-0 z-[90] w-full transition-all duration-1000 ease-in-out"
          draggable="false"
          alt=""
          id="bottom_desktop"
        />
        <img
          src={`${process.env.REACT_APP_STORAGE}assets/landing-bottom-mobile.webp`}
          className="bottom_desktop absolute bottom-0 z-[90] w-full transition-all duration-1000 ease-in-out md:hidden"
          draggable="false"
          alt=""
          id="bottom_mobile"
        />
      </div>

      <div className=" z-10 flex h-screen  flex-col   overflow-x-hidden">
        <header>
          <div className="mdm:px-2 flex h-[15%] w-full justify-between py-4 md:px-16">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/logo/desktop.webp`}
              alt="Logo CInematrixs"
              draggable="false"
              className="mdm:h-9 unselectable mdm:w-fit  my-auto md:h-[67px] md:w-[286px]"
              loading="lazy"
            />
            <div className="font-popins mdm:hidden flex  gap-8 text-[24px] font-bold not-italic leading-[60px] text-[#ffffff]">
              <p className="shad unselectable mt-auto cursor-pointer	 text-[#ffffffce] no-underline transition-all delay-300 duration-300 ease-in-out hover:text-white hover:underline">
                JaxxTopia
              </p>
              <p
                className="shad unselectable mt-auto cursor-pointer	 text-[#ffffffce] no-underline transition-all delay-300 duration-300 ease-in-out hover:text-white hover:underline"
                onClick={() => {
                  // scroll to
                  document.querySelector("#feature").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                How it's made
              </p>
              <p
                className="shad unselectable mt-auto cursor-pointer 	 text-[#ffffffce] no-underline transition-all delay-300 duration-300 ease-in-out hover:text-white hover:underline"
                onClick={() => {
                  // scroll to
                  document.querySelector("#about").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                About Us
              </p>
            </div>
            <div className="md:hidden">
              <div
                id="nav-p"
                className="transition-gen mx-4 my-4 flex h-12 w-12 flex-col justify-evenly "
                onClick={() => {
                  document.getElementById("nav2").classList.toggle("opacity-0");
                  document
                    .getElementById("nav-p")
                    .classList.toggle("rotate-180");
                  document.getElementById("nav1").classList.toggle("rotate-45");
                  document
                    .getElementById("nav1")
                    .classList.toggle("translate-y-[12px]");
                  document
                    .getElementById("nav3")
                    .classList.toggle("-rotate-45");
                  document
                    .getElementById("nav3")
                    .classList.toggle("-translate-y-[12px]");
                  if (
                    document
                      .getElementById("mob-menu")
                      .classList.contains("invisible")
                  ) {
                    document
                      .getElementById("mob-menu")
                      .classList.toggle("animate-modal");
                    document
                      .getElementById("mob-menu")
                      .classList.toggle("invisible");
                  } else {
                    document
                      .getElementById("mob-menu")
                      .classList.toggle("animate-modal-out");
                    document
                      .getElementById("mob-menu")
                      .classList.toggle("invisible");
                  }
                }}
              >
                <div
                  id="nav1"
                  className="transition-gen h-1 w-12 bg-white"
                ></div>
                <div
                  id="nav2"
                  className="transition-gen h-1 w-12 bg-white"
                ></div>
                <div
                  id="nav3"
                  className="transition-gen h-1 w-12 bg-white"
                ></div>
              </div>
            </div>
          </div>
          <div
            id="mob-menu"
            className=" invisible absolute  top-[15%] z-50  flex w-full justify-center  md:hidden"
          >
            <div className=" font-popins  min-h-40 flex  w-[80%]  flex-col gap-4 rounded-xl bg-slate-700 py-8 text-[24px] font-bold not-italic leading-[60px] text-[#ffffff]">
              <p className=" unselectable mt-auto cursor-pointer  text-center	 text-[#ffffffce] no-underline   hover:text-white hover:underline">
                JaxxTopia
              </p>
              <p
                className=" unselectable mt-auto cursor-pointer text-center	 text-[#ffffffce] no-underline  hover:text-white hover:underline"
                onClick={() => {
                  // scroll to
                  document.querySelector("#feature").scrollIntoView({
                    behavior: "feature",
                  });
                }}
              >
                How it's made
              </p>
              <p
                className=" unselectable mt-auto cursor-pointer  text-center	 text-[#ffffffce] no-underline  hover:text-white hover:underline"
                onClick={() => {
                  // scroll to
                  document.querySelector("#about").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                About Us
              </p>
            </div>
          </div>
        </header>

        <div className="flex h-[60%]  w-full flex-col  overflow-x-clip ">
          <Hero />
          <div className="flex w-full justify-center">
            <input
              className="font-popins mdm:h-[60px] mdm:w-[90%] mdm:text-sm h-[45px] w-[40%] rounded-[17px] text-center text-lg font-bold outline-none"
              placeholder="Search for a similar movie recommendation"
              id="hero_input"
            />
          </div>
          <div
            id="suggestions"
            className="mdm:w-[90%] mx-4 flex h-48  max-h-48 w-[40%] flex-col  self-center rounded-lg pt-1"
          >
            {setInner(suggestions)}
          </div>
        </div>
      </div>
      <Suspense fallback={<div id="main_search" className="search "></div>}>
        <div id="main_search" className="search ">
          {/* normal  search bar , flex of (search part 1 , part 2) */}
          <Main searchTerm={searchTerm} />
        </div>
      </Suspense>
      <div className="mdm:flex-col flex  w-full">
        <div id="feature" className="font-Poppins flex flex-col md:w-1/2">
          <h1 className="unselectable sp-t mdm:mt-4 mdm:text-center mdm:text-[28px] text-[42px] underline md:mx-16 md:mt-8">
            Features
          </h1>
          <img
            src={`${process.env.REACT_APP_STORAGE}assets/binge.webp`}
            draggable="false"
            className="mdm:mx-auto mdm:w-1/3 mt-auto w-3/4"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="font-Dosis my-16 flex flex-col  justify-center gap-8 font-bold md:mx-24 md:w-1/2">
          <div className="top-container mdm:overflow-x-clip relative w-full">
            <div className="bgeffect animate-blob mdm:w-44 mdm:h-44 absolute top-0 -left-4   -z-50 h-96 w-96 rounded-full bg-purple-300 opacity-70  mix-blend-multiply blur-xl  filter"></div>
            <div className="bgeffect animate-blob animation-delay-2000 mdm:w-44 mdm:h-44 absolute top-0 -right-4   -z-50 h-96 w-96  rounded-full bg-yellow-300  opacity-70 mix-blend-multiply blur-xl filter"></div>
            <div className="bgeffect animate-blob animation-delay-4000 mdm:w-44 mdm:h-44 absolute -bottom-8 left-20   -z-50  h-96 w-96 rounded-full bg-pink-300  opacity-70 mix-blend-multiply blur-xl  filter"></div>
            <div className="top-container flex flex-col gap-4 ">
              <div className="focus:animate-slide-fwd-center mdm:self-center  smm:flex-col mdm:w-[80%] flex w-[80%] gap-2 rounded-lg bg-white px-2 opacity-100 shadow-lg md:min-h-[200px]">
                <div className=" smm:self-center smm:w-[80%] my-auto sm:w-1/3">
                  <img
                    src={tech}
                    className="unselectable"
                    alt="Technology used 1"
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className="smm:w-[80%] my-auto sm:w-2/3">
                  <p className="mdm:text-sm p-4  text-lg">
                    CineMatrix is one of its kind versatile, diversified movie
                    recommending system which is based on not one or two but a
                    combination five different recommending
                    algorithms.CineMatrix is built on a solid foundation of
                    advanced algorithms and methods like
                    K-Nearest-Neighbours,tfidf,cosine similarity,SVD and many
                    more other advanced techniques.
                  </p>
                </div>
              </div>
              <div className="mdm:self-center  smm:flex-col mdm:w-[80%] flex w-[80%] gap-2 rounded-lg bg-white px-2 opacity-100 shadow-lg md:min-h-[200px]">
                <div className=" smm:self-center smm:w-[80%] my-auto sm:w-1/3">
                  <img
                    src={scalability}
                    className="unselectable"
                    alt="Technology used"
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className="smm-w[80%] my-auto sm:w-2/3">
                  <p className="mdm:text-sm p-4  text-lg">
                    All you have to do is enter the movie of you're choice and
                    hit search, our recommender fetches the best matching
                    results from our database containing more than a Lakh movies
                    and displays simila rmovies to the movie you entered. Not
                    just the similar movies, you are also greeted with other
                    great movies in the segment that are liked by other users
                    with a similar taste as you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="about"></section>

      <Suspense fallback={<div>Loading... </div>}>
        <Review searchTerm={searchTerm} />
      </Suspense>

      <Suspense fallback={<footer>Loading... </footer>}>
        <footer>
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
  function setInner(suggestions) {
    var array = [];
    for (var i = 0; i < suggestions.length; i++) {
      if (i === 0) {
        array.push(
          <div
            key={i}
            role={"list"}
            className="terms font-Poppins w-full cursor-pointer rounded-t-md bg-white text-center font-semibold text-black transition-colors duration-100 ease-linear hover:bg-gray-500"
            onClick={(e) => {
              setSearchTerm(e.target.innerText);
              document.querySelector("#main_search").scrollIntoView({
                behavior: "smooth",
              });
              document
                .getElementById("bottom_desktop")
                .classList.remove("opacity-0");
              document
                .getElementById("bottom_mobile")
                .classList.remove("opacity-0");
            }}
          >
            {suggestions[i]}
          </div>
        );
      } else if (i === suggestions.length - 1) {
        array.push(
          <div
            role={"list"}
            key={i}
            className="terms font-Poppins w-full cursor-pointer rounded-b-md bg-white text-center font-semibold capitalize text-black transition-colors duration-100 ease-linear hover:bg-gray-500"
            onClick={(e) => {
              setSearchTerm(e.target.innerText);
              document.querySelector("#main_search").scrollIntoView({
                behavior: "smooth",
              });
              document
                .getElementById("bottom_desktop")
                .classList.remove("opacity-0");
              document
                .getElementById("bottom_mobile")
                .classList.remove("opacity-0");
            }}
          >
            {suggestions[i]}
          </div>
        );
      } else {
        array.push(
          <div
            role={"list"}
            key={i}
            className="terms font-Poppins w-full cursor-pointer bg-white text-center font-semibold  capitalize text-black transition-colors duration-100 ease-linear hover:bg-gray-500"
            onClick={(e) => {
              setSearchTerm(e.target.innerText);
              document.querySelector("#main_search").scrollIntoView({
                behavior: "smooth",
              });
              document
                .getElementById("bottom_desktop")
                .classList.remove("opacity-0");
              document
                .getElementById("bottom_mobile")
                .classList.remove("opacity-0");
            }}
          >
            {suggestions[i]}
          </div>
        );
      }
    }
    if (array.length === 0) {
      array.push(
        <div
          key={i}
          className="terms font-Poppins w-full rounded-md  bg-white text-center font-semibold capitalize text-black transition-colors duration-100 ease-linear "
        >
          No matching results found...
        </div>
      );
    }
    return array;
  }
}

function images() {
  const item = (i) => {
    return (
      <li className="slide" key={i}>
        <img
          src={`${process.env.REACT_APP_STORAGE}LandingBg/${i}.webp`}
          srcSet={`${process.env.REACT_APP_STORAGE}LandingBg/srcset/${i}.webp 480w , ${process.env.REACT_APP_STORAGE}LandingBg/${i}.webp 800w`}
          sizes="(max-width: 600px) 480px,
            800px"
          alt={`bg-${i}`}
          draggable="false"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </li>
    );
  };
  const arr = [];
  for (var i = 1; i <= 7; i++) {
    if (i !== 5 && i !== 2) {
      arr.push(item(i));
    }
  }
  return arr;
}

export default App;

/*
MAIN PAGE
FEATURES
SEARCH PART
ABOUT US
RATEUS/CONTACT US
SUPPORT US
FOOTER
*/
