import React from 'react';
import './pageLoader.css'; 
import { ReactTyped } from "react-typed";

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="text-white text-5xl font-sans font-semibold">
        Building.<ReactTyped
                strings={["Rocket...","Engine....."]}
                typeSpeed={140}
                backSpeed={150}
                loop
              />
      </div>
    </div>
  );
};

export default PageLoader;
