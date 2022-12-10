import Leftside from '@/components/Leftside';
import OnCard from '@/components/OnCard';
import SearchPage from '@/components/SearchPage';
import Topside from '@/components/Topside';
import { SpotifyProps } from 'model/Typings';
import { useRouter } from 'next/router';
import { SpotifyContext } from 'pages/_app';
import React, { useContext } from 'react'
import Image from 'next/image';
import PodcastBg from "../../public/static/image/podcast-bg.jpg"
import NotFoundSearch from '@/components/notFoundSearch';


function SeacrhTerm() {
    const router = useRouter();
    const { slug } = router.query;

    const foundSearch =  <SearchPage />;
    const notFound = <NotFoundSearch />;
    var result;

    
    const spotify: SpotifyProps[] = useContext(SpotifyContext);

    React.useEffect(() => {
      
      spotify.map((value)=>{
        if (value.title.includes(`${slug}`) != true){
          result = notFound;
        }else{
          result = foundSearch;
        }
        return result;
      })
    
    }, [])
    
  return (
    <div className="max-w-full  flex flex-row ">
      <div className="w-60 h-screen bg-black overflow-hidden">
        <Leftside />
      </div>
      <div className="w-full">
        <div className="h-16 bg-neutral-900 overflow-hidden">
          <Topside />
        </div>
        <div className="w-full  ">
          <div className="max-h-full bg-zinc-800 overflow-hidden">
          {
            spotify.map((value)=>{
              if (value.title.includes(`${slug}`) != true){
                result = notFound;
              }else{
                result = foundSearch;
              }
              return result;
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeacrhTerm