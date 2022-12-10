import { useRouter } from 'next/router'
import PodcastBg from "../public/static/image/podcast-bg.jpg";
import React, { useContext } from 'react'
import Image from 'next/image';
import { SpotifyProps } from 'model/Typings';
import { SpotifyContext } from 'pages/_app';


function NotFoundSearch() {
    const router = useRouter();
    const { slug } = router.query;

    

    return (
        <React.Fragment>
            <div className='px-8 pt-12 xl:h-[93.1vh] lg:h-[92.5vh] md:h-[92.8vh] sm:h-[92.5vh] overflow-y-auto scrollbar-hide flex flex-row justify-start text-white font-bold text-2xl shadow-lg'>
                <div>ไม่พบผลลัพธ์การค้นหา "{slug}" </div>
            </div>
        </React.Fragment>
    )
}




export default NotFoundSearch;

