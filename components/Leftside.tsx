import React from "react";
import { BsSpotify } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { GoDiffAdded } from "react-icons/go";
import { MdFavorite } from "react-icons/md";

type Props = {
  children?: JSX.Element;
};

const Leftside: React.FC<Props> = ({ children }: Props) => {
  return (
    <React.Fragment>
      
        <div className="flex h-full flex-col justify-between items-start text-gray-400 ">
          <div>
          <div className="flex justify-start items-center py-6">
            <div className="ml-5 mr-1 text-4xl text-white">
              <BsSpotify />
            </div>
            <span className="text-2xl font-bold text-white">Spotify</span>
          </div>
          <div className="flex justify-start items-center text-bold text-lg mt-2 hover:text-white transition ease-in-out duration-150">
            <div className="ml-5 mr-3 text-2xl">
              <AiFillHome />
            </div>
            <span className="text-sm">Home</span>
          </div>
          <div className="flex justify-start items-center text-bold text-lg pt-4 hover:text-white transition ease-in-out duration-150">
            <div className="ml-5 mr-3 text-2xl">
              <FiSearch />
            </div>
            <span className="text-sm">Search</span>
          </div>
          <div className="flex justify-start items-center text-bold text-lg pt-4 hover:text-white transition ease-in-out duration-150">
            <div className="ml-5 mr-3 text-2xl">
              <BiLibrary />
            </div>
            <span className="text-sm">Your Library</span>
          </div>
          <div className="flex justify-start items-center text-bold text-lg mt-8 hover:text-white transition ease-in-out duration-150">
            <div className="ml-5 mr-3 text-2xl">
              <GoDiffAdded />
            </div>
            <span className="text-sm">Create Playlist</span>
          </div>
          <div className="flex justify-start items-center text-bold text-lg pt-4 hover:text-white transition ease-in-out duration-150">
            <div className="ml-5 mr-3 text-2xl">
              <MdFavorite />
            </div>
            <span className="text-sm">Like Songs</span>
          </div>
          </div>
          <div className="mb-4">
          <div className="ml-5 mr-3 text-xs hover:text-white transition ease-in-out duration-150">Cookies</div>
          <span className="ml-5 mr-3 mt-3 text-xs hover:text-white transition ease-in-out duration-150">
            Privacy
          </span>
          </div>
        </div>

        {/* <div className="flex flex-col justify-start items-start text-bold text-lg pt-4 text-gray-400  pb-3">
          <div className="ml-5 mr-3 text-xs hover:text-white transition ease-in-out duration-150">Cookies</div>
          <span className="ml-5 mr-3 mt-3 text-xs hover:text-white transition ease-in-out duration-150">
            Privacy
          </span>
        </div> */}

    </React.Fragment>
  );
};

export default Leftside;
