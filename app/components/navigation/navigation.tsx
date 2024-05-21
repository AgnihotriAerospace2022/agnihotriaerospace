"use client";
import Link from "next/link";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import Image from "next/image";
import { useState } from "react";

export default function Navigate() {
  const [clicked, setClicked] = useState(false);
  function humbergclick() {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
    console.log(clicked);
  }
  return (
    <>
      <div className="">
        <div className="color mx-0 my-0 px-0 h-16">
          <div className="flex flex-row ">
            <div className="basis-3/6 ">
              <Link href="/">
                <img
                  src={"/images/logo_white.png"}
                  className="inline-block h-[105px] -mt-3 ml-1 lg:h-44 lg:-mt-10  "
                  alt=""
                />
              </Link>
            </div>
            <div className="text-neutral-50  basis-3/6  flex align-middle justify-center lg:hidden ">
              <div
                onClick={humbergclick}
                className=" h-10 w-10 mt-[25px] ml-36"
              >
                <Menu />
              </div>
            </div>
            <div className="basis-3/4  hidden lg:inline-block flex justify-end ml-80">
              <div className="links ml-38 translate-x-16 mt-10">
                
                <div className="div1">
                  <Link href="/">Home</Link></div>
                <div className="div1">
                  <Link href="/gallery">Gallery</Link>
                </div>
                <div className="div1">
                  <Link href="/about">About</Link>
                </div>
                <div className="div1">
                  <Link href="/product">Product </Link>
                </div>
                <div className="div1">
                  <Link href="/work">Work With Us </Link>
                </div>
                <div className="div1">
                  <Link href="/contact">Contact </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {clicked && (
        <div
          className="w-[100vw] h-[22.6vh] bg-[#020B11]
        flex flex-col gap-1 text-white text-base text-right pr-7
        backdrop-blur-sm "
        >
          <p >
            {" "}
            <Link href="/">Home</Link>
          </p>
         
         
          <p>
            <Link href="/gallery">Gallery</Link>
          </p>
          <p>
            <Link href="/product">Product </Link>
          </p>
          <p>
            {" "}
            <Link href="/work">Work With Us </Link>
          </p>
          <p>
            <Link href="/about">About</Link>{" "}
          </p>
          <p>
            {" "}
            <Link href="/contact">Contact </Link>
          </p>
        </div>
      )}
    </>
  );
}
