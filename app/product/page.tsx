"use client";
import React from "react";
import "./style.css";
import Navigate from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import { useEffect, useState } from "react";
import PageLoader from "../components/loader/pageLoader";

function Product() {
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
        <div>
          <Navigate></Navigate>
          <center>
            <h1
              className="text-4xl bg-gradient-to-t from-gray-700
             from-17% to-white to-62% font-semibold font-sans
             bg-clip-text text-transparent
            "
            >
              Product
            </h1>
          </center>
          <main className="flex flex-row pl-[10vw] h-[60vh] lg:h-[100vh] pr-[10vw] pt-[3vw] gap-10 mb-20 relative">
            <section className="grid grid-rows-2 lg:w-32 lg:ml-32 lg:h-[90vh]  basis-1/2 relative">
              <div className=" text-white text-left  lg:h-32 lg:w-80 absolute lg:top-24" id="rcs">
                <p className="lg:text-3xl lg:p-2 lg:px-0 text-xl"> RCS</p>
                <p className="text-xs lg:text-base">
                 The reaction control system will guide the rocket from
                  space to the desired landing location using a closed-loop
                  algorithm. This system continuously adjusts the rocket&apos;s
                  trajectory by comparing the actual position to the desired
                  path and making real-time corrections
                </p>
              </div>
              <div
                className="text-white text-left lg:h-32 lg:w-80 absolute lg:bottom-48 bottom-0"
                id="epts"
              >
                <p className="lg:text-3xl lg:p-2 lg:px-0 text-xl ">Electrically Powered Turbine System</p>
                <p className="text-xs lg:text-base">
                   The electrically powered
                  turbine system, which uses a battery-operated BLDC motor, will
                  provide precise control over the fuel flow to the engine,
                  producing controlled thrust for a controlled landing.
                </p>
              </div>
            </section>

            <div className="lg:h-[80vh] w-[100vw] h-[80vh] lg:p-0 lg:m-0  basis-1/2 ">
              <img
                src="/images/model.png"
                className="lg:m-0 p-0 h-[75%] w-[100%] lg:h-[150%] lg:-mt-36 lg:ml-20"
                alt=""
              />
            </div>
            <div className="lg:h-[1px] lg:w-96 bg-white absolute lg:top-40 lg:left-[40%] hidden lg:inline-block"></div>
            <div className="lg:h-[1px] lg:w-32 bg-white absolute lg:top-[173px] lg:rotate-12 lg:left-[66.5%] hidden lg:inline-block"></div>
            <div className="lg:h-[1px] lg:w-96 bg-white absolute lg:bottom-72 lg:left-[40%] hidden lg:inline-block"></div>
            <div className="lg:h-[1px] lg:w-40 bg-white absolute lg:bottom-[248px] lg:rotate-[30deg] lg:left-[65.9%] hidden lg:inline-block"></div>
            
            {/* <div className="absolute lg:hidden h-[1px] w-20 bg-white  top-32 left-[45vw]"></div>
            <div className="absolute lg:hidden h-[1px] w-8 rotate-45 bg-white  top-[139px] left-[62.5vw]"></div>
            <div className="absolute lg:hidden h-[1px] w-20 bg-white  bottom-40 left-[45vw]"></div>
            <div className="absolute lg:hidden h-[1px] w-8 rotate-45 bg-white  bottom-[14px] left-[62.5vw]"></div> */}
          </main>
         

          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default Product;
