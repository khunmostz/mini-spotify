import CategoriesPage from "@/components/CategoriesPage";
import Leftside from "@/components/Leftside";
import Topside from "@/components/Topside";
import { SpotifyProps } from "model/Typings";
import { SpotifyContext } from "pages/_app";
import React, { useContext, useEffect } from "react";

function Index() {
  const spotify: SpotifyProps[] = useContext(SpotifyContext);

  useEffect(() => {}, []);

  return (
    <div className="max-w-full  flex flex-row ">
      <div className="w-60 h-screen bg-black overflow-hidden">
        <Leftside />
      </div>
      <div className="w-full">
        <div className="h-16 bg-neutral-900 overflow-hidden">
          <Topside />
        </div>
        <div className="w-full">
          <div className="max-h-full bg-zinc-800 overflow-hidden">
            <CategoriesPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
