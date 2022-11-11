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
      <div className="w-60 h-screen bg-black">
        <Leftside />
      </div>
      <div className="w-full">
        <div className="h-16 bg-neutral-900 overflow-hidden">
          <Topside />
        </div>
        <div className="w-full">
        <div className="h-screen bg-zinc-800">
          <Main />
        </div>
        </div>
      </div>
    </div>
  );
};

export default index;
