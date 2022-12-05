import Leftside from '@/components/Leftside';
import OnCard from '@/components/OnCard';
import Topside from '@/components/Topside';
import { useRouter } from 'next/router';
import React from 'react'

export default function Index() {
    const router = useRouter();
    const { slug } = router.query;
    
  return (
    <div className="max-w-full h-screen overflow-hidden flex flex-row ">
    <div className="w-60 h-screen bg-black">
      <Leftside />
    </div>
    <div className="w-full">
      <div className="h-16 bg-neutral-900 overflow-hidden">
        <Topside />
      </div>
      <div className="w-full border border-red-500  ">
        <div className="h-screen bg-zinc-800 overflow-y-scroll ">
          <OnCard />
        </div>
      </div>
    </div>
  </div>
  )
}
