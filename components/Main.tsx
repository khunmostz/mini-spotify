import React, { useContext } from "react";
import CardCategories from "./CardCategories";


type Props = {};



const Main = (props: Props) => {


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
