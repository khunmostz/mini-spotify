import { useRouter } from 'next/router'
import PodcastBg from "../public/static/image/podcast-bg.jpg";
import React from 'react'
import Image from 'next/image';

function SearchPage() {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <React.Fragment>
            <div className='px-8 pt-12 h-screen overflow-y-auto scrollbar-hide flex flex-row justify-start text-white font-bold text-2xl shadow-lg'>
                <div className='w-1/3 mr-4'>
                    <h1>ผลการค้นหายอดนิยม</h1>
                    <div className='w-full h-56 mt-5 bg-zinc-700 rounded-lg shadow-lg'>
                        <div className='px-4 pt-5'>
                            <Image src={PodcastBg} alt='' className='rounded-full shadow-2xl' width={100} height={100}></Image>
                            <p className='pt-2'>{slug}</p>
                            <p className='bg-zinc-900 w-20 text-center rounded-full text-sm mt-5'>ศิลปิน</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <h1>เพลง</h1>
                    <div className='w-full h-56 mt-5'>
                        <div className='px-4 py-5'>
                            <div className='flex flex-row mb-3'>
                                <Image src={PodcastBg} alt='' className='' width={40} height={40} />
                                <div className='ml-4 flex flex-row justify-between w-full'>
                                    <div className='s'>
                                        <p className='text-sm'>VVS</p>
                                        <p className='text-sm text-gray-500'>title</p>
                                    </div>
                                    <div className='text-sm text-gray-500'>
                                        2:04
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row mb-3'>
                                <Image src={PodcastBg} alt='' className='' width={40} height={40} />
                                <div className='ml-4 flex flex-row justify-between w-full'>
                                    <div className='s'>
                                        <p className='text-sm'>VVS</p>
                                        <p className='text-sm text-gray-500'>title</p>
                                    </div>
                                    <div className='text-sm text-gray-500'>
                                        2:04
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row mb-3'>
                                <Image src={PodcastBg} alt='' className='' width={40} height={40} />
                                <div className='ml-4 flex flex-row justify-between w-full'>
                                    <div className='s'>
                                        <p className='text-sm'>VVS</p>
                                        <p className='text-sm text-gray-500'>title</p>
                                    </div>
                                    <div className='text-sm text-gray-500'>
                                        2:04
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row mb-3'>
                                <Image src={PodcastBg} alt='' className='' width={40} height={40} />
                                <div className='ml-4 flex flex-row justify-between w-full'>
                                    <div className='s'>
                                        <p className='text-sm'>VVS</p>
                                        <p className='text-sm text-gray-500'>title</p>
                                    </div>
                                    <div className='text-sm text-gray-500'>
                                        2:04
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchPage