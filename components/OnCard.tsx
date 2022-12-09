import { useRouter } from 'next/router';
import PodcastBg from "../public/static/image/podcast-bg.jpg";
import Image from 'next/image';
import React, { useContext } from 'react'
import { AiFillPlayCircle, AiOutlineHeart } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import BodyOnCard from './BodyOnCard';
import { SpotifyProps } from 'model/Typings';
import { SpotifyContext } from 'pages/_app';

function OnCard() {
  const router = useRouter();
  const { slug } = router.query;

  const spotify: SpotifyProps[] = useContext(SpotifyContext);

  return (
    <React.Fragment>
      <div className='flex flex-col w-full xl:h-[93.1vh] lg:h-[92.5vh] md:h-[93.1vh] sm:h-[92.5vh] overflow-auto'>
        <header className='w-full h-96 bg-gradient-to-b from-green-500 via-green-600 to-green-800 flex justify-start items-center'>
          <div className='p-5'>
            {
              spotify.filter(filter => filter.title === slug).map((value, index) => {
                return <Image key={index} src={value.image} alt={''} width={200} height={200} className='drop-shadow-xl' />
              })
            }
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
        <div className=' bg-gradient-to-b from-green-700  via-zinc-800 to-zinc-900'>
          <div className='text-[4rem] flex items-center px-5 py-6'>
            <AiFillPlayCircle className='text-green-500 mr-4' />
            <AiOutlineHeart className='text-white text-[2.4rem] mr-4' />
            <FiMoreHorizontal className='text-gray-400 text-[2.4rem] mr-4' />
          </div>
          <BodyOnCard slug={slug} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default OnCard