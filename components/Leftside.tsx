import React from "react";
import { BsSpotify } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { GoDiffAdded } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

type Props = {
  children?: JSX.Element;
};

const Leftside: React.FC<Props> = ({ children }: Props) => {
  const listVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        staggerChildren: 0.1,
      }
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0
    }
  };
  return (
    <React.Fragment>

      <div className="flex h-full flex-col justify-between items-start text-gray-400 ">
        <motion.ul
          // variants={listVariants}
          // initial='hidden'
          // animate='visible'
        >
          <motion.li
            // variants={itemVariants}
            className="flex justify-start items-center py-6 cursor-pointer">
            <div className="ml-5 mr-1 text-4xl text-white">
              <BsSpotify />
            </div>
            <span className="text-2xl font-bold text-white">Spotify</span>
          </motion.li>
          <Link href='/'>
            <motion.li
              // variants={itemVariants}
              className="flex justify-start items-center text-bold text-lg mt-2 hover:text-white cursor-pointer">
              <div className="ml-5 mr-3 text-2xl">
                <AiFillHome />
              </div>
              <span className="text-sm">Home</span>
            </motion.li>
          </Link>
          <motion.li
            // variants={itemVariants}
            className="flex justify-start items-center text-bold text-lg pt-4 hover:text-white cursor-pointer ">
            <div className="ml-5 mr-3 text-2xl">
              <FiSearch />
            </div>
            <span className="text-sm">Search</span>
          </motion.li>
          <motion.li
            // variants={itemVariants}
            className="flex justify-start items-center text-bold text-lg pt-4 hover:text-white cursor-pointer ">
            <div className="ml-5 mr-3 text-2xl">
              <BiLibrary />
            </div>
            <span className="text-sm">Your Library</span>
          </motion.li>
          <motion.li
            // variants={itemVariants}
            className="flex justify-start items-center text-bold text-lg mt-8 hover:text-white cursor-pointer ">
            <div className="ml-5 mr-3 text-2xl">
              <GoDiffAdded />
            </div>
            <span className="text-sm">Create Playlist</span>
          </motion.li>
          <motion.li
            // variants={itemVariants}
            className="flex justify-start items-center text-bold text-lg pt-4 hover:text-white cursor-pointer ">
            <div className="ml-5 mr-3 text-2xl">
              <MdFavorite />
            </div>
            <span className="text-sm">Like Songs</span>
          </motion.li>
        </motion.ul>
        <div className="mb-4">
          <div className="ml-5 mr-3 text-xs hover:text-white cursor-pointer ">Created by</div>
          <span className="ml-5 mr-3 mt-3 text-xs hover:text-white cursor-pointer ">
            Khunmostz24
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
