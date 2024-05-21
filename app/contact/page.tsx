"use client";
import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Navigate from "../components/navigation/navigation";
import "./contact.css";
import PageLoader from "../components/loader/pageLoader";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  
  
  
  const handleSubmit = () => {

    setEmail('');
    setFirstName('');
    setLastName('');
    setQuery('');

  };

  useEffect(() => {
    // Simulating an asynchronous action
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? <PageLoader /> :
        <div className="overflow-x-hidden">
        <Navigate></Navigate>
        <center>
          <h1
            className=" bg-clip-text text-transparent bg-gradient-to-t
           from-zinc-900 from-15% via-slate-500
           to-white to-70% text-6xl transition ease-in-out duration-200
          lg:text-7xl
           "
          >
            Contact Us
          </h1>
        </center>
        <div className="mt-24 flex lg:flex-row flex-col align-middle justify-center ml-[56px] mb-32  lg:ml-20">
          <div id="input" className=" flex  flex-col">
            <div
              id="name"
              className=" basis-1/2 flex flex-col gap-2 lg:flex-row justify-center align-middle "
            >
              <input
                placeholder="        First Name"
                className="m-5 w-64 lg:w-72 h-16 rounded-full bg-zinc-200"
                value={firstname}
                onChange={function (e) {
                 
                  setFirstName(e.target.value);
                }}
              />
              <input
                placeholder="        Last  Name"
                className="m-5 w-64 lg:w-72 h-16 rounded-full bg-zinc-200"
                value={lastname}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div id="email">
              <input
                type="email"
                placeholder="         E-mail"
                className="m-5 w-64 lg:-mt-16 lg:w-80 h-16 rounded-full bg-zinc-200"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              name="query"
              placeholder="    Got Any Questions?feel free to let us know"
              className="lg:m-5 h-32 -ml-3 w-[340px] rounded-3xl lg:h-44"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="text-teal-400 bg-white w-32 h-12 mt-5
              rounded-2xl ml-24 lg:ml-56 lg:w-44 lg:h-14 font-extrabold
               border-emerald-800 border-2 ease-in-out duration-200 hover:bg-emerald-800 hover:text-white
               cursor-none"
               onClick={handleSubmit}
            >
              submit
            </button>
          </div>
          <div id="map" className=" basis-1/2 lg:m-2 lg:ml-48 -ml-8 mt-5">
            <p className="text-white lg:m-2 lg:-mt-1 mb-4 ml-4">Locate Us?</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.637949618812!2d74.92246127409362!3d12.86664518743917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35945eed72a4f%3A0xe038073ace034b4!2sAgnihotri%20aerospace!5e0!3m2!1sen!2sin!4v1706783214756!5m2!1sen!2sin"
              allowFullScreen={true}
              loading="lazy"
              className="w-96 h-64 lg:w-96 lg:h-96 rounded-lg inline-block"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />
            <br />
          </div>
        </div>
        <Footer></Footer>
      </div>}
    </>
  );
}

export default Contact;
