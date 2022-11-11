import React from "react";
import Leftside from "../components/Leftside";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Topside from "../components/Topside";
type Props = {};

const index = (props: Props) => {
  return (
    // bg-zinc-80
    <div className="max-w-full max-h-screen overflow-hidden flex flex-row">
      <div className="w-full h-screen basis-2/12 bg-black">
        <Leftside />
      </div>
      <div className="w-full">
        <div className="w-full h-14 bg-blue-600 overflow-hidden">
          <Topside />
        </div>
        <Main />
        </div>
    </div>
  );
};

export default index;
