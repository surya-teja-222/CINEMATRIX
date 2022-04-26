import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import posterError from "../assets/postererror.webp";
import React from "react";

export default function DataItem({ mName, i, mIndex }) {
  // var genere, title, date, rating, img;
  const [genere, setGenere] = useState(null);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [rating, setRating] = useState(null);
  const [img, setImg] = useState(null);

  useEffect(() => {
    // reset all the data
    setGenere(null);
    setTitle(null);
    setDate(null);
    setRating(null);
    setImg(null);
  }, [mIndex]);

  const uri =
    "https://api.themoviedb.org/3/movie/" +
    mIndex +
    "?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US";
  fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // if status is 200
      if (data.status_code !== 404) {
        const genres = data.genres;
        try {
          setGenere(genres.map((genre) => genre.name).join(", "));
        } catch (e) {
          setGenere(genres[0].name);
        }
        setTitle(data.title);
        setDate(data.release_date);
        setRating(data.vote_average);
        setImg("https://image.tmdb.org/t/p/w500" + data.poster_path);
      }
    });

  return (
    <>
      <div
        tabIndex={i}
        className="group hmm font-Poppins mdm:w-[90%] mdm:p-2 mdm:self-center w-3/5 self-center rounded-lg bg-slate-500 bg-gradient-to-l from-[#d87a7aad] to-[#7c535396] p-6  text-lg text-gray-100 shadow-2xl outline-none  transition-all duration-500 ease-in-out md:mx-12"
      >
        <div className="head flex cursor-pointer justify-between">
          <h1 className="font-Poppins ml-4 inline-block text-2xl	 font-semibold capitalize not-italic transition-all duration-500 ease-in-out group-focus:italic group-focus:underline">
            {mName ? mName : "Loading..."}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            className="rotate-180  transition-all duration-1000 ease-in-out group-focus:rotate-0"
          >
            <path
              className="fill-white"
              d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
            />
          </svg>
        </div>
        <div className="abody mdm:flex-col ml-4 flex  max-h-0 justify-between gap-8 group-focus:max-h-[1000px]">
          <div className="flex flex-col gap-4 ">
            <div className="genres  mt-4 text-[#18fb6f]">
              <p className="bold font-Poppins  mr-2 inline-block font-semibold text-gray-100  ">
                Genre: {"   "}
              </p>
              {genere ? genere : "Loading..."}
            </div>
            <div className="title ">
              <p className="bold font-Poppins  mr-2 inline-block text-[20px]  font-semibold ">
                Title: {"   "}
              </p>
              {title ? title : "Loading..."}
            </div>
            <div className="release-date ">
              <p className="bold font-Poppins  mr-2 inline-block text-[20px]  font-semibold ">
                Released On: {"   "}
              </p>
              {date ? date : "Loading..."}
            </div>
            <div className="rating ">
              <p className="bold font-Poppins  mr-2 inline-block text-[20px]  font-semibold ">
                Rating (Out of 10): {"   "}
              </p>
              {rating ? rating : "Loading..."}
            </div>
            {genere ? <></> : err(mName)}
          </div>
          <div>
            <img
              src={img ? img : posterError}
              alt={mName}
              className="mdm:mb-8 mdm:w-[80%] mdm:mx-auto mdm:max-h-max max-h-60 scale-[1]  rounded-md transition-all duration-500 ease-in-out hover:scale-[1.01] md:mr-7"
            />
          </div>
        </div>
      </div>
    </>
  );
}

const err = (mName) => {
  return (
    <div className="error mt-12">
      <p className="bold inline-block font-sans font-bold  ">
        Please Wait while we are Trying to Load data about {mName} ...
        <br />
        <span className="italic">
          Consider checking other movies meanwhile, or try again later.
        </span>
      </p>
    </div>
  );
};

DataItem.propTypes = {
  mName: PropTypes.string,
  i: PropTypes.number,
  mIndex: PropTypes.number,
};
