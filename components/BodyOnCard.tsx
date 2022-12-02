import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'
import PodcastBg from "../public/static/image/podcast-bg.jpg";
import Image from 'next/image';
function BodyOnCard() {
    return (
        <React.Fragment>
            <div className=' px-5'>
                <table className='w-full'>
                    <tr className='text-gray-400 text-xs'>
                        <th className='text-start pb-4 w-5'>#</th>
                        <th className='text-start pb-4'>ชื่อแทร็ก</th>
                        <th className='text-start pb-4'>อัลบั้ม</th>
                        <th className='text-start pb-4'>วันที่เพิ่ม</th>
                        <th className='text-start pb-4'><MdOutlineWatchLater /></th>
                    </tr>
                    <tr className='border-t border-gray-500 text-gray-400'>
                        <td className='pt-4 pr-4'>1</td>
                        <td className='pt-4 flex'>
                            <Image src={PodcastBg} alt='' width={50} height={50} className='mr-5'></Image>
                            <div>
                            <p>Title</p>
                            <p>Desc</p>
                            </div>
                        </td>
                        <td className='pt-4'>LoremIpsum</td>
                        <td className='pt-4'>2 ช.ม ที่ผ่านมา</td>
                        <td className='pt-4'>5.06</td>
                    </tr>
                  
                </table>
            </div>
        </React.Fragment>
    )
}

export default BodyOnCard