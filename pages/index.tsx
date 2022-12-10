import CategoriesPage from "@/components/CategoriesPage";
import { useRouter } from "next/router";
import React from "react";
import Leftside from "../components/Leftside";
import Main from "../components/Main";
import Topside from "../components/Topside";
// import Custom404 from "./category/404";
type Props = {};

const index = (props: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    // bg-zinc-80
    <div className="max-w-full max-h-screen overflow-hidden flex flex-row">
      <div className="w-60 h-screen bg-black">
        <Leftside />
      </div>
      <div className="w-full ">
        <div className="h-16 bg-neutral-900 overflow-hidden">
          <Topside />
        </div>
        <div className="w-full">
          <div className="h-screen bg-zinc-800 overflow-auto">
            {(() => {
              if (router.asPath == "/") {
                return <Main />;
              } else if (router.asPath == `/category${slug}`) {
                return <CategoriesPage />;
              } else {
                // return <Custom404></Custom404>;
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
