import { useRouter } from 'next/router'
import Image from 'next/image';
import React, { useContext } from 'react'
import PodcastBg from "../public/static/image/podcast-bg.jpg";
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { SpotifyProps } from 'model/Typings';
import { SpotifyContext } from 'pages/_app';
function CategoriesPage() {
    const router = useRouter();
    const { slug } = router.query;

    const spotify: SpotifyProps[] = useContext(SpotifyContext);



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

    React.useEffect(() => {
    }, [])


    return (
        <>
            <motion.ul
                variants={listVariants}
                initial='hidden'
                animate='visible'
                className='px-8 pt-12 h-screen overflow-y-auto scrollbar-hide'>
                <motion.li
                    variants={itemVariants}
                    className='flex flex-row justify-between mb-5'>
                    <div className='text-white font-bold text-2xl'>{slug}ยอดนิยม</div>
                    <div className='text-gray-500 text-xs'>SEEALL</div>
                </motion.li>

                {spotify.filter(type => type.categories === slug).map((value) => {
                    return <Link href={`/playlist/${value.title}`} key={value.id}>
                        
                        <motion.li
                            
                            variants={itemVariants}
                            className="grid 2xl:grid-cols-7  grid-flow-row gap-10 mr-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            <motion.div
                                whileTap={{ scale: 0.8 }}
                                whileHover={{
                                    scale: 1.2,
                                }}
                                className='w-[12rem] h-[15rem] bg-zinc-700 p-5 rounded-lg cursor-pointer'>
                                <div className='mb-2'>
                                    <Image src={value.image} width={400} height={400} alt={''} className='rounded-lg' />
                                </div>
                                <div className=''>
                                    <p className='text-white font-bold'>{value.title}</p>
                                    <p className='text-gray-400 text-sm'>{value.little}</p>
                                </div>
                            </motion.div>
                        </motion.li>
                    </Link>
                })}
            </motion.ul>
        </>
    )
}

export default CategoriesPage