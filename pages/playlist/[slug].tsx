import Leftside from "@/components/Leftside";
import OnCard from "@/components/OnCard";
import Topside from "@/components/Topside";
import { useRouter } from "next/router";
import React from "react";

export default function Index() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="max-w-full  flex flex-row bg-black">
      <div className="w-60 h-screen bg-black overflow-hidden">
        <Leftside />
      </div>
      <div className="w-full">
        <div className="h-16 bg-neutral-900 overflow-hidden">
          <Topside />
        </div>
        <div className="w-full ">
          <div className="max-h-full bg-zinc-800 overflow-hidden">
            <div className="w-fullbg-zinc-900">
              <OnCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
