import "./footer.css";
import hero from "./../assets/hero.svg";
import contact from "./../methods/postContact";
import React from "react";

// import bg from "./../assets/fbg.svg";

export default function Footer() {
  return (
    <>
      <section>
        <div
          className="grid-f  bg-black "
          style={{
            // backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="mob-bot mt-auto md:pt-4">
            <img
              src={hero}
              alt=""
              className="mdm:mx-auto h-3/4 w-3/4"
              draggable="false"
            />
          </div>
          <div className="mdm:gap-16 mdm:mt-8 flex flex-col md:my-6 md:justify-between">
            <img
              src={`${process.env.REACT_APP_STORAGE}assets/logo/logo_centered.webp`}
              alt="logo"
              className="test  mx-auto w-1/2 md:p-4"
              draggable="false"
            />
            <div className="font-Poppins footer-b flex flex-col  self-center font-bold leading-[38px]">
              <div className="flex self-center ">
                <p className="unselectable text-center text-white">
                  Made with love <span className="test">💖</span> by{" "}
                  <span className="test cursor-pointer text-[#FF1516] hover:underline">
                    Team CineMatrix
                  </span>
                </p>
              </div>
              <div className="flex self-center">
                <p className="unselectable  text-center text-[#827F7F]">
                  Developed by{" "}
                  <span className="test cursor-pointer text-[#FF1516] hover:underline">
                    Surya
                  </span>{" "}
                  and{" "}
                  <span className="test cursor-pointer text-[#FF1516] hover:underline">
                    Bhanu
                  </span>
                </p>
              </div>
              <div className="flex self-center">
                <p className="unselectable text-center text-[#827F7F]">
                  Designed by{" "}
                  <span className="test cursor-pointer text-[#FF1516] hover:underline">
                    Pradhyumna
                  </span>
                </p>
              </div>
              <div className="flex self-center">
                <p className="unselectable text-center text-white">
                  &#9400; Copyright{" "}
                  <span className="test cursor-pointer text-[#FF1516] hover:underline">
                    CineMatrix
                  </span>
                  . All Rights Reserved{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="font-Poppins mdm:mt-6 flex flex-col justify-center gap-4 text-2xl font-bold md:my-6">
            <h2 className="unselectable mx-auto text-white">Contact Us</h2>
            {/* <div className="mx-8 rounded-md bg-[#C4C4C499] p-4"></div> */}
            <input
              type="email"
              name="email"
              id="email-contact"
              className="mx-8 rounded-md bg-[#C4C4C499] px-4 py-2 text-sm outline-none"
              placeholder="Email.."
              required
            />
            <textarea
              name="message"
              id="msg-contact"
              required
              placeholder="Type your message, We will get back to you!"
              className="mx-8 rounded-md bg-[#C4C4C499] px-4 py-2 text-sm outline-none"
              maxLength={200}
              rows={3}
            />
            <div
              role={"button"}
              className="test unselectable mx-auto cursor-pointer rounded-lg bg-white p-2 hover:bg-blue-500 hover:text-white"
              onClick={() => {
                document.getElementById("err").innerText = "";
                var email = document.getElementById("email-contact").value;
                var message = document.getElementById("msg-contact").value;
                if (email.length > 0 && message.length > 0) {
                  contact(email, message);
                  document.getElementById("err").style.color = "green";
                  document.getElementById("err").innerText =
                    "Successfully sent your message!";
                  // scroll to top and reload
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                    window.location.reload();
                  }, 2000);
                } else {
                  document.getElementById("err").innerText =
                    "Please fill all the fields";
                }
              }}
            >
              Send
            </div>
            <p
              id="err"
              className="self-center text-sm font-normal text-red-600"
            ></p>
          </div>
        </div>
      </section>
    </>
  );
}
