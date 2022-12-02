import { useRouter } from 'next/router';
import PodcastBg from "../public/static/image/podcast-bg.jpg";
import Image from 'next/image';
import React from 'react'
import { AiFillPlayCircle, AiOutlineHeart } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import BodyOnCard from './BodyOnCard';

function OnCard() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <React.Fragment>
      <div className='flex flex-col h-full'>
        <header className='w-full h-96 bg-gradient-to-b from-green-500 via-green-600 to-green-800 flex justify-start items-center'>
          <div className='p-5'>
            <Image src={PodcastBg} alt={''} width={200} height={200} className='drop-shadow-xl' />
          </div>
          <div className='text-white'>
            <div>
              เพลยลิสต์
            </div>
            <div className='text-3xl font-bold'>
              {slug}
            </div>
            <div className='mt-6'>
              <div className='text-gray-400'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </div>
              <div>
                Spotify ● ถูกใจ 245,678 ครั้ง ● เพลง, ประมาณ 7 ชม
              </div>
            </div>
          </div>
        </header>
        <div className='w-full h-full  bg-gradient-to-b from-green-700  via-zinc-800 to-zinc-900'>
          <div className='text-[4rem] flex items-center px-5 py-6'>
           <AiFillPlayCircle className='text-green-500 mr-4'/>
           <AiOutlineHeart className='text-white text-[2.4rem] mr-4' />
           <FiMoreHorizontal className='text-gray-400 text-[2.4rem] mr-4' />
          </div>

          <BodyOnCard />

        </div>
      </div>
    </React.Fragment>
  )
}

export default OnCard