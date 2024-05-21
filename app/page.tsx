"use client";
import "./app.css";
import Navigate from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Milestone from "./components/milestone/milestone";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import PageLoader from "./components/loader/pageLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
        <>
          <div className="navigate ">
            <Navigate />
          </div>
          <div className="content relative">
            <img
              src={"/images/bg.png"}
              alt="background-image"
              className="h-6/6"
            />
            <div className=" absolute top-16 lg:top-48 right-10 text-2xl md:text-5xl lg:text-8xl ">
              <p className="text-white text-right opacity-100 animate-onScrollFade">
                Expanding
              </p>
              <p className="text-white text-right opacity-95">
                <span className="opacity-30 ">the</span> horizon{" "}
                <span className="opacity-30 ">of</span> space{" "}
              </p>

              <p
                className="text-right opacity-75 
             bg-gradient-to-r from-cyan-200 from-30% via-cyan-500 to-green-600 bg-clip-text text-transparent"
              >
                <ReactTyped
                  strings={["exploration."]}
                  typeSpeed={140}
                  backSpeed={150}
                  loop
                />
              </p>
            </div>
          </div>
          <div className="mt-1/4 mb-1/5 -ml-7">
            <p className="text-white text-4xl ml-[14vw] font-sans font-light lg:text-7xl lg:ml-[12vw] mt-8 -mb-7">
              MileStone.
            </p>
            <Milestone></Milestone>
          </div>
          <div className="footer ">
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
