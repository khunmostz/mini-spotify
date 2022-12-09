import React, { useContext } from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'
import PodcastBg from "../public/static/image/podcast-bg.jpg";
import Image from 'next/image';
import { SpotifyProps } from 'model/Typings';
import { SpotifyContext } from 'pages/_app';

type playListProps = {
    id?: string
    track: string,
    album: string,
    datetime: string,
    image: string
}


function BodyOnCard({ slug }: any) {

    const spotify: SpotifyProps[] = useContext(SpotifyContext);

    return (
        <React.Fragment>
            <div className='px-5'>
                <table className='w-full'>
                    <tbody>
                        <tr className='text-gray-400 text-xs border-b border-gray-500'>
                            <th className='text-start pb-4 w-5'>#</th>
                            <th className='text-start pb-4'>ชื่อแทร็ก</th>
                            <th className='text-start pb-4'>อัลบั้ม</th>
                            <th className='text-start pb-4'>วันที่เพิ่ม</th>
                            <th className='text-start pb-4'><MdOutlineWatchLater /></th>
                        </tr>


                    
                        {spotify.filter(value => value.title === slug).map((result) => {
                            return <>

                                {result.list.map((value, index) => {
                                    console.log(value.id);
                                    return <tr key={index} className=' text-gray-400'>
                                        <td className='pt-4 pr-4 mb-4'>{value.id}</td>
                                        <td className='pt-4 flex mb-4'>
                                            <div> <Image src={value.image} alt='' width={50} height={50} className='mr-5'></Image></div>
                                            <div>
                                                <div>{value.track}</div>
                                                <div>{value.track}</div>
                                                {/* <div>{value.id}</div> */}
                                            </div>
                                        </td>
                                        <td className='pt-4 mb-4'>{value.album}</td>
                                        <td className='pt-4 mb-4'>{value.datetime}</td>
                                        <td className='pt-4 mb-4'>{value.time}</td>
                                    </tr>
                                })}
                            </>
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default BodyOnCard