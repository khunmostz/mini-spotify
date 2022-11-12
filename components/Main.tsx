import React from 'react'
import Image from 'next/image';
import { CategoryModels } from 'model/Category.model';
import PodcastBg from '../public/static/image/podcast-bg.jpg'
import HipHopBg from '../public/static/image/hiphop-bg.jpg';
import AnimeBg from '../public/static/image/anime-bg.jpg';
import EdmBg from '../public/static/image/edm-bg.jpg';
import ArtisBg from '../public/static/image/artis-bg.jpg';
import { motion, Variants } from 'framer-motion';

type Props = {}



const Main = (props: Props) => {

  const listCategories: CategoryModels = [

    { name: 'พอดแคสต์', color: '#079987', image: PodcastBg },
    { name: 'ฮิปฮอป', color: '#6315DA', image: HipHopBg },
    { name: 'อนิเมะ', color: '#5124FC', image: AnimeBg },
    { name: 'แดนส์/อิเล็กทรอนิกส์', color: '#EB1734', image: EdmBg },
    { name: 'ศิลปิน', color: '#B970E9', image: ArtisBg },
    { name: 'พอดแคสต์', color: '#079987', image: PodcastBg },
    { name: 'ฮิปฮอป', color: '#6315DA', image: HipHopBg },
    { name: 'อนิเมะ', color: '#5124FC', image: AnimeBg },
    { name: 'แดนส์/อิเล็กทรอนิกส์', color: '#EB1734', image: EdmBg },
    { name: 'ศิลปิน', color: '#B970E9', image: ArtisBg },
  ]


  React.useEffect(() => {
  }, [])


  const itemVariants: Variants = {
    hidden: {
      x: -500,
      opacity: 0,
      scale: 0.5,
    },
    visible: index=>({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type:'spring',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      }
    })
  };

  return (
    <React.Fragment>
      <div className='pl-8 pt-12 h-screen overflow-y-scroll scrollbar-hide'>
        <div className='text-white font-bold text-2xl mb-6'>
          เลือกดูทั้งหมด
        </div>

        <motion.div
        className='grid 2xl:grid-cols-7  grid-flow-row gap-10 mr-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {listCategories.map((value, index) => {
            return <motion.div
            custom={index}
              initial='hidden'
              animate='visible'
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              variants={itemVariants}
              key={index} style={{
                backgroundColor: `${value.color}`,
              }} className='w-48 h-48  bg-white rounded-lg relative z-0 overflow-hidden hover:scale-105 transition ease-in-out duration-150 cursor-pointer'>
              <div className='p-4 font-bold'>{value.name}</div>
              <div className='absolute bottom-0 -right-8 rotate-[30deg] drop-shadow-lg'>
                <Image src={value.image} alt={''} width={100}
                  height={100} />
              </div>
            </motion.div>

          })}
        </motion.div>

      </div>
    </React.Fragment>
  )
}

export default Main