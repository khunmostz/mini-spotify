import { useRouter } from 'next/router'
import React from 'react'

function CategoriesPage() {
    const router = useRouter();
    return (
        <>
            <div className='pl-8 pt-12 h-screen overflow-y-auto scrollbar-hide mb-20'>
                <div className='flex flex-row justify-between'>
                <div className='text-white'>CategoriesPage</div>
                <div className='text-xs'>SEEALL</div>
                </div>
            </div>
        </>
    )
}

export default CategoriesPage