import React from "react";
import Image from "next/image";
import { CategoryModel } from "model/Typings";
import PodcastBg from "../public/static/image/podcast-bg.jpg";
import HipHopBg from "../public/static/image/hiphop-bg.jpg";
import AnimeBg from "../public/static/image/anime-bg.jpg";
import EdmBg from "../public/static/image/edm-bg.jpg";
import ArtisBg from "../public/static/image/artis-bg.jpg";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

type Props = {};

const Main = (props: Props) => {
  const listCategories: CategoryModel[] = [
    { name: "พอดแคสต์", color: "#079987", image: PodcastBg },
    { name: "ฮิปฮอป", color: "#6315DA", image: HipHopBg },
    { name: "อนิเมะ", color: "#5124FC", image: AnimeBg },
    { name: "แดนส์/อิเล็กทรอนิกส์", color: "#EB1734", image: EdmBg },
    { name: "ศิลปิน", color: "#B970E9", image: ArtisBg },
    { name: "พอดแคสต์", color: "#079987", image: PodcastBg },
    { name: "ฮิปฮอป", color: "#6315DA", image: HipHopBg },
    { name: "อนิเมะ", color: "#5124FC", image: AnimeBg },
    { name: "แดนส์/อิเล็กทรอนิกส์", color: "#EB1734", image: EdmBg },
    { name: "ศิลปิน", color: "#B970E9", image: ArtisBg },
    { name: "แดนส์/อิเล็กทรอนิกส์", color: "#EB1734", image: EdmBg },
  ];

  React.useEffect(() => { }, []);

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
      <div className="pl-8 pt-12 h-screen overflow-y-auto scrollbar-hide mb-20">
        <div className="text-white font-bold text-2xl mb-6">เลือกดูทั้งหมด</div>

        <motion.ul
          variants={listVariants}
          initial='hidden'
          animate='visible'
          className="grid 2xl:grid-cols-7  grid-flow-row gap-10 mr-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {listCategories.map((value, index) => {
            return (
              <Link href={`/category/${value.name}`}>
                <motion.li
                  whileTap={{ scale: 0.8 }}
                  whileHover={{
                    scale: 1.2,
                  }}
                  variants={itemVariants}
                  key={index}
                  style={{
                    backgroundColor: `${value.color}`,
                  }}
                  className="w-48 h-48  bg-white rounded-lg relative z-0 overflow-hidden hover:cursor-pointer"
                >
                  <div className="p-4 font-bold">{value.name}</div>
                  <div className="absolute bottom-0 -right-8 rotate-[30deg] drop-shadow-lg">
                    <Image src={value.image} alt={""} width={100} height={100} />
                  </div>
                </motion.li>
              </Link>
            );
          })}
        </motion.ul>
      </div>
    </React.Fragment>
  );
};

export default Main;
