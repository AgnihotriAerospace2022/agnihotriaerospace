"use client";
import React from "react";
import "../product/style.css";
import Navigate from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import { useEffect, useState } from "react";
import PageLoader from "../components/loader/pageLoader";
import MailUs from "./alert";
function Work() {
  const [isLoading, setIsLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  function workAlert() {
    if (clicked) setClicked(false);
    else setClicked(true);
  }

  useEffect(() => {
    // Simulating an asynchronous action
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          <Navigate></Navigate>
          {clicked ? (
            <div>
              <MailUs></MailUs>{" "}
              <div
                className="text-lg absolute text-white top-[275px] z-50 right-10
                lg:right-[27%] lg:top-[65vh] cursor-pointer hover:opacity-50
                "
                onClick={workAlert}
              >
                {" "}
                go back
              </div>
            </div>
          ) : null}

          <h1
            className="text-4xl bg-gradient-to-t from-gray-700 lg:ml-[41%] ml-[23%]
             from-17% to-white to-62% font-semibold font-sans 
             bg-clip-text text-transparent "
          >
            Work With Us
          </h1>

          <section className="flex flex-row gap-5 lg:gap-16 lg:pl-[13vw] lg:h-[50vh] h-[60vh] lg:pr-[10vw] lg:pt-[5vw] p-5 mb-20 animate-onScrollFade">
            <div
              className="border p-5 border-gray-500 hover:border-gray-400 rounded-3xl hover:scale-105 duration-300 hover:backdrop-blur-sm
           hover:bg-white/20 cursor-pointer "
              onClick={workAlert}
            >
              <center>
                <h1 className="text-zinc-200  m-2 mb-10">Job</h1>
              </center>

              <p className="text-zinc-400 lg:text-base text-xs">
                Agnihotri Aerospace is excited to announce that we are now
                accepting applications for both{" "}
                <span className="text-white">job positions </span>. Join our
                innovative team and contribute to cutting-edge aerospace
                projects while advancing your career.
              </p>
            </div>
            <div
              className="border p-5 border-gray-500 rounded-3xl hover:border-gray-400 hover:scale-105 duration-300
          hover:backdrop-blur-sm hover:bg-white/20 cursor-pointer"
              onClick={workAlert}
            >
              <center>
                <h1 className="text-zinc-200 m-2 mb-10">Internship</h1>
              </center>

              <p className="text-zinc-400 lg:text-base text-xs">
                Agnihotri Aerospace is excited to announce that we are now
                accepting applications for{" "}
                <span className="text-white">internships</span>. Join our
                innovative team and contribute to cutting-edge aerospace
                projects while advancing your career.
              </p>
            </div>
          </section>
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default Work;
