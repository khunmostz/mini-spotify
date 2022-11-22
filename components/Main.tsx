import { SpotifyProps } from "model/Typings";
import { SpotifyContext } from "pages/_app";
import React, { useContext } from "react";
import CardCategories from "./CardCategories";


type Props = {};

const Main = (props: Props) => {

  const spotify:SpotifyProps[] = useContext(SpotifyContext);

  console.log(spotify[0].categories);

  return (
    <React.Fragment>
      <div className="pl-8 pt-12 h-screen overflow-y-auto scrollbar-hide">
        <div className="text-white font-bold text-2xl mb-6">เลือกดูทั้งหมด</div>

          <CardCategories />
       
      </div>
    </React.Fragment>
  );
};

export default Main;
