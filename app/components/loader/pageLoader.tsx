import React from 'react';
import { ReactTyped } from "react-typed";
// position: fixed;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// background:linear-gradient(to top , rgb(0, 18, 26) 100% ,
//  rgb(52, 104, 122));

// display: flex;
// justify-content: center;
// align-items: center;
// z-index: 9999;
const PageLoader = () => {
  return (
    <div className="page-loader fixed top-0 left-0 w-[100%] h-[100%] bg-gradient-to-t from-[#00121A] to-[#34687A] 
    flex justify-center items-center z-50
    ">
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
