"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./milestone.css";

import { Pagination, Navigation } from "swiper/modules";

export default function Milestone() {
  return (
    <>
      <center>
        <div className="app">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" flex lg:flex-row flex-col w-[100%] h-[100%]">
                <div className="lg:h-[100%] lg:w-[200vw] bg-black">
                  {
                    <div className="lg:h-[100%] lg:w-[100%] lg:mt-1 -mt-20 pl-6 bg-black">
                      <iframe
                        className="h-[35vh] lg:w-[45vw] pt-32 pl-2 lg:h-[100%]"
                        src="https://embed.wave.video/OPv1dz63CJmhBRid"
                        frameBorder="0"
                        allow="autoplay; "
                        scrolling="no"
                      ></iframe>
                    </div>
                  }

                  {/* for mile stones

Add 
First Rocket Design = Successfully Designed First Prototype Rocket Design

Key Highlights:

Milestone Achievement: Completed the design of our inaugural prototype rocket.
Innovative Features: Incorporates cutting-edge technology and materials for enhanced performance and efficiency.
Team Effort: A collaborative effort by our dedicated engineering and design teams.
Next Steps: Preparing for testing phase to validate design and performance metrics.
Future Goals: Aim to refine and optimize the design based on test results for the final model

2.
Task: Successfully Tested Engine

Key Highlights:

Test Completion: Engine testing successfully completed.
Performance Metrics: All performance metrics met or exceeded expectations.
Efficiency: Engine demonstrated optimal efficiency under various test conditions.
Reliability: No issues observed during testing; engine ran smoothly throughout.
Next Steps: Prepare detailed report and schedule follow-up for maintenance protocols.

3.
Designed Integrated Avionics System

Key Highlights:

Advanced Navigation and Control: Enhanced precision and reliability in navigation and control functions.
Modular Architecture: Facilitates easy upgrades and maintenance.
High-Resolution Displays: Improved situational awareness with high-definition graphical interfaces.
Robust Communication Systems: Ensures seamless and secure data exchange.
Fault-Tolerant Design: Enhanced safety with redundant systems and fail-safe mechanisms.
Real-Time Data Processing: Rapid data analysis for critical decision-making.



4.

Event: Successful first drop test of the rocket.
Key Highlights:
Objective: Validate the rocket's stability and performance during free fall.
Test Location :Hubballi , Deshapande startups .
Key Systems Tested:
Aerodynamic stability
Descent control mechanisms
Data collection systems
Results: All systems performed within expected parameters.


*/}
                </div>
                <div
                  className="bg-black lg:text-base text-left text-sm p-14 lg:-ml-20 lg:pt-40 text-white 
                 "
                >
                  First Rocket Design = Successfully Designed First Prototype
                  Rocket Design
                  <br />
                  Key Highlights:
                  <br />
                  Milestone Achievement: Completed the design of our inaugural
                  prototype rocket.
                  <div className="hidden lg:inline-block">
                    Innovative Features: Incorporates cutting-edge technology
                    and materials for enhanced performance and efficiency. Team
                    Effort: A collaborative effort by our dedicated engineering
                    and design teams. Next Steps: Preparing for testing phase to
                    validate design and performance metrics. Future Goals: Aim
                    to refine and optimize the design based on test results for
                    the final model
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col lg:flex-row w-[100%] h-[100%]">
                <div className="h-[100%] w-[500vw] bg-black">
                  {
                    <div className="lg:h-[100%] lg:w-[100%] -mt-20 pl-6 bg-black">
                      <iframe
                        className="h-[40vh] lg:h-[100%] lg:w-[45vw] pt-32 pl-2"
                        src="https://embed.wave.video/gdBOVV21a11qrDEk"
                        
                        frameBorder="0"
                        allow="autoplay; "
                        scrolling="no"
                      ></iframe>
                    </div>
                  }
                </div>
                <div className="bg-black lg:text-base text-left text-sm p-14 -mt-10 lg:-ml-20 lg:pt-24  text-white ">
                  <p className="text-2xl"> Successfully Tested Engine</p>
                  <br />
                  Key Highlights:
                  <br />
                  Test Completion: Engine testing successfully completed.
                  <div className="hidden lg:inline-block">
                    Performance Metrics: All performance metrics met or exceeded
                    expectations. Efficiency: Engine demonstrated optimal
                    efficiency under various test conditions. Reliability: No
                    issues observed during testing; engine ran smoothly
                    throughout. Next Steps: Prepare detailed report and schedule
                    follow-up for maintenance protocols.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col  lg:flex-row w-[100%] h-[100%]">
                <div className="h-[100%] w-[500vw]">
                  {
                    <div className="h-[100%] w-[100%] bg-black">
                      <iframe
                        className="h-[100%] w-[55vw] pt-10 ml-20 "
                        src="https://embed.wave.video/sEFckTib6v7Jq41b"
                        frameBorder="0"
                        allow="autoplay; "
                        scrolling="no"
                      ></iframe>
                    </div>
                  }
                </div>
                <div className="bg-black lg:text-base text-left text-sm p-14 -mt-8 lg:-ml-20 lg:pt-24 text-white ">
                  <p className="text-2xl">
                    Designed Integrated Avionics System
                  </p>
                  <br />
                  Key Highlights:
                  <br />
                  Advanced Navigation and Control: Enhanced precision and
                  reliability in navigation and control functions.
                  <div className="hidden lg:inline-block">
                    Modular Architecture: Facilitates easy upgrades and
                    maintenance. High-Resolution Displays: Improved situational
                    awareness with high-definition graphical interfaces. Robust
                    Communication Systems: Ensures seamless and secure data
                    exchange. Fault-Tolerant Design: Enhanced safety with
                    redundant systems and fail-safe mechanisms. Real-Time Data
                    Processing: Rapid data analysis for critical
                    decision-making.
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex lg:flex-row flex-col w-[100%] h-[100%] ">
                <div className="h-[100%] w-[500vw]">
                  {
                    <div className="h-[100%] w-[100%] bg-black pt-5 pl-[25vw]">
                      <iframe
                        className="h-[140%] w-[35vw] lg:w-[26vw]  "
                        src="https://embed.wave.video/Jw5hmkdIoAivMZpv"
                        frameBorder="0"
                        allow="autoplay; "
                        scrolling="no"
                      ></iframe>
                    </div>
                  }
                </div>
                <div className="bg-black lg:text-base text-left text-sm p-16 lg:-ml-[150vh] lg:pt-40 text-white ">
                  <p className="text-2xl">
                    Successfully tested the rocket first drop test
                  </p>
                  <br />
                  Key Highlights:
                  <br />
                  Validate the rocket&apos;s stability and performance during free
                  fall.
                  <div className="hidden lg:inline-block">
                    Test Location :Hubballi , Deshapande startups . Key Systems
                    Tested: Aerodynamic stability Descent control mechanisms
                    Data collection systems Results: All systems performed
                    within expected parameters.
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </center>
    </>
  );
}
