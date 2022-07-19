import React from "react";

/**
 *
 * @returns {JSX.Element}
 */

export default function AboutUs() {
  return (
    <section className="about-us" aria-label="About the devs">
      <div className="h-16 w-full bg-[#2F2929] md:hidden">
        <h3 className="m-auto text-center  align-middle font-Nanum text-[3.5rem] leading-[64px] text-white">
          About the Team
        </h3>
      </div>
      <div className="relative min-h-[36rem]  w-full md:grid  md:grid-cols-3 mdm:flex mdm:flex-col">
        <div className="absolute  w-full py-4 mdm:hidden">
          <h3 className="unselectable mx-auto text-center font-Nanum text-8xl text-white">
            About the Team
          </h3>
        </div>
        <div className="absolute  grid h-full w-full grid-cols-3 mdm:hidden">
          <div className="group mx-auto mt-auto mb-6 flex h-full flex-col">
            <div className="mt-auto mb-6 gap-6">
              <img
                src={`${process.env.REACT_APP_STORAGE}assets/sSurya.webp`}
                alt=""
                className=" opacity-0 transition-all delay-100 duration-[1500ms] ease-in-out hover:opacity-100 group-hover:opacity-100"
              />
              <h3 className="text-center font-Mochiy text-2xl text-black opacity-0 transition-all delay-200 duration-[1500ms] ease-in-out hover:opacity-100 group-hover:opacity-100">
                Full Stack Developer
                <br /> (frontend,backend)
              </h3>
            </div>
          </div>
          <div className="group mx-auto mt-auto mb-6 flex h-full flex-col">
            <div className="mt-auto mb-6 gap-6">
              <img
                src={`${process.env.REACT_APP_STORAGE}assets/sSasi.webp`}
                alt=""
                className=" opacity-0 transition-all delay-100 duration-[1500ms] ease-in-out hover:opacity-100 group-hover:opacity-100"
              />
              <h3 className="text-center font-Mochiy text-2xl text-white opacity-0 transition-all delay-200 duration-[1500ms] ease-in-out hover:opacity-100 group-hover:opacity-100">
                Python Developer
                <br /> (backend)
              </h3>
            </div>
          </div>
          <div className="group mx-auto mt-auto mb-6 flex h-full flex-col">
            <div className="mt-auto mb-6 gap-6">
              <img
                src={`${process.env.REACT_APP_STORAGE}assets/sHarsha.webp`}
                alt=""
                className=" opacity-0 transition-all delay-100 duration-[1500ms] ease-in-out hover:opacity-100 group-hover:opacity-100"
              />
              <h3 className="text-center font-Mochiy text-2xl text-[#EB384D] opacity-0 transition-all delay-200 duration-[1500ms] ease-in-out hover:opacity-100 group-hover:opacity-100">
                UI / UX Designer
              </h3>
            </div>
          </div>
        </div>
        <div className="flex h-full bg-[#85D876] md:flex-col md:justify-end mdm:h-fit mdm:max-h-screen">
          <img
            src={`${process.env.REACT_APP_STORAGE}assets/surya.webp`}
            className="mt-auto w-full md:ml-auto mdm:mr-auto  mdm:max-h-screen mdm:w-1/2 "
            draggable="false"
            alt="Surya Teja Reddy @surya-teja-222 https://github.com/surya-teja-222"
          />
          <div className="flex w-1/2 flex-col justify-center gap-4 md:hidden">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/sSuryaGreen.webp`}
              alt=""
              className="transition-all delay-100 duration-[1500ms] ease-in-out"
            />
            <h3 className="text-center font-Mochiy  text-white">
              Full Stack Developer
              <br /> (frontend,backend)
            </h3>

            <div className="m-auto mx-2 grid grid-cols-4 gap-1 rounded-full bg-[#FFEDED] px-5 py-2 text-center">
              <a
                href="https://github.com/surya-teja-222"
                className="group relative"
              >
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/github.webp`}
                  alt="Github of Surya https://github.com/surya-teja-222"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
              <a
                href="https://linkedin.com/in/suryateja222"
                className="group relative"
              >
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/linkedin.webp`}
                  alt="LinkedIn of Surya https://linkedin.com/in/suryateja222"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
              <a
                href="https://instagram.com/surya_teja_222"
                className="group relative"
              >
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/instagram.webp`}
                  alt="Instagram of Surya https://instagram/surya_teja_222"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
              <a href="https://t.me/surya_teja_222" className="group relative">
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/telegram.webp`}
                  alt="Telegram of Surya @surya_teja_222"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-full justify-end bg-[#75D0D7] md:flex-col mdm:h-fit mdm:max-h-screen mdm:flex-row-reverse">
          <img
            src={`${process.env.REACT_APP_STORAGE}assets/sasi.webp`}
            className="mt-auto w-full  md:mx-auto mdm:ml-auto  mdm:max-h-screen mdm:w-1/2 "
            draggable="false"
            alt="Sasi Vatsal @sasivatsal7122 https://github.com/sasivatsal7122"
          />
          <div className="flex w-1/2 flex-col justify-center gap-4 md:hidden">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/sSasi.webp`}
              alt=""
              className="transition-all delay-100 duration-[1500ms] ease-in-out"
            />
            <h3 className="text-center font-Mochiy  text-white">
              Python Developer
              <br /> (backend)
            </h3>

            <div className="m-auto mx-2 grid grid-cols-4 gap-2 rounded-full bg-[#FFEDED] px-5 py-2 text-center">
              <a
                href="https://github.com/sasivatsal7122"
                className="group relative"
              >
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/github.webp`}
                  alt="Github of Sasi https://github.com/sasivatsal7122"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sasi-vatsal-606195215"
                className="group relative"
              >
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/linkedin.webp`}
                  alt="Instagram of Sasi https://www.linkedin.com/in/sasi-vatsal-606195215"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/sasivatsal/"
                className="group relative"
              >
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/instagram.webp`}
                  alt="Telegram of Sasi https://www.instagram.com/sasivatsal/"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
              <a href="https://t.me/Sasivatsal" className="group relative">
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/telegram.webp`}
                  alt="Github of Sasi https://t.me/Sasivatsal"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-full justify-end bg-[#DE8B95] md:flex-col mdm:h-fit mdm:max-h-screen">
          <img
            src={`${process.env.REACT_APP_STORAGE}assets/harsha.webp`}
            className="mr-auto   w-full mdm:max-h-screen  mdm:w-1/2 "
            draggable="false"
            alt="Harsha @HarshaMalla https://github.com/HarshaMalla"
          />
          <div className="flex w-1/2 flex-col justify-center gap-4 md:hidden">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/sHarsha.webp`}
              alt=""
              className="transition-all delay-100 duration-[1500ms] ease-in-out"
            />
            <h3 className="text-center font-Mochiy  text-white">
              UI/UX Designer
            </h3>

            <div className="m-auto mx-2 grid grid-cols-4 gap-2 rounded-full bg-[#FFEDED] px-5 py-2 text-center">
              <a
                href="https://github.com/HarshaMalla"
                className="group relative"
              >
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/github.webp`}
                  alt="Github of Harsha https://github.com/HarshaMalla"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sri-harsha-malla-38023620a"
                className="group relative"
              >
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/linkedin.webp`}
                  alt="LinkedIn of Harsha https://www.linkedin.com/in/sri-harsha-malla-38023620a"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/harshaa.exe/"
                className="group relative"
              >
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/instagram.webp`}
                  alt="Instagram of Harsha https://www.instagram.com/harshaa.exe/"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
              <a href="https://t.me/Sriharshamalla" className="group relative">
                <img
                  src={`${process.env.REACT_APP_STORAGE}assets/telegram.webp`}
                  alt="Telegram of Harsha https://t.me/Sriharshamalla"
                  className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="l-bg grid h-[80px] w-full grid-cols-3 mdm:hidden">
        <div className="m-auto flex gap-6 text-center">
          <a
            href="https://github.com/surya-teja-222"
            className="group relative"
          >
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/github.webp`}
              alt="Github of Surya https://github.com/surya-teja-222"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">GitHub</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
          <a
            href="https://linkedin.com/in/suryateja222"
            className="group relative"
          >
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/linkedin.webp`}
              alt="LinkedIn of Surya https://linkedin.com/in/suryateja222"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">LinkedIn</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
          <a href="https://instagram/surya_teja_222" className="group relative">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/instagram.webp`}
              alt="Instagram of Surya https://instagram/surya_teja_222"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">Instagram</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
          <a href="https://t.me/surya_teja_222" className="group relative">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/telegram.webp`}
              alt="Telegram of Surya @surya_teja_222"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">Telegram</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
        </div>
        <div className="m-auto flex gap-6 text-center">
          <a
            href="https://github.com/sasivatsal7122"
            className="group relative"
          >
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/github.webp`}
              alt="Github of Sasi https://github.com/sasivatsal7122"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">GitHub</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/sasi-vatsal-606195215"
            className="group relative"
          >
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/linkedin.webp`}
              alt="Instagram of Sasi https://www.linkedin.com/in/sasi-vatsal-606195215"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">LinkedIn</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
          <a
            href="https://www.instagram.com/sasivatsal/"
            className="group relative"
          >
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/instagram.webp`}
              alt="Telegram of Sasi https://www.instagram.com/sasivatsal/"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">Instagram</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
          <a href="https://t.me/Sasivatsal" className="group relative">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/telegram.webp`}
              alt="Github of Sasi https://t.me/Sasivatsal"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">Telegram</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
        </div>
        <div className="m-auto flex gap-6 text-center">
          <a href="https://github.com/HarshaMalla" className="group relative">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/github.webp`}
              alt="Github of Harsha https://github.com/HarshaMalla"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">GitHub</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/sri-harsha-malla-38023620a"
            className="group relative"
          >
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/linkedin.webp`}
              alt="LinkedIn of Harsha https://www.linkedin.com/in/sri-harsha-malla-38023620a"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">LinkedIn</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
          <a
            href="https://www.instagram.com/harshaa.exe/"
            className="group relative"
          >
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/instagram.webp`}
              alt="Instagram of Harsha https://www.instagram.com/harshaa.exe/"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-140%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">Instagram</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
          <a href="https://t.me/Sriharshamalla" className="group relative">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/telegram.webp`}
              alt="Telegram of Harsha https://t.me/Sriharshamalla"
              className="duration-400 h-10 w-10 scale-[1] rounded-full shadow-xl transition-all ease-in-out hover:scale-[1.1] hover:shadow-2xl"
              loading="lazy"
            />
            <span className="absolute left-[-60%] top-[-125%] scale-0    text-white opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <p className="rounded-lg bg-black px-4 py-2">Telegram</p>
              <div className="mx-auto h-4 w-4 ">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.5L8.5 7L2 0.5H14.5Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </div>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
