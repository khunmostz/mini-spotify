import React from 'react'

type Props = {}

const Topside: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>

      <div className='flex flex-row justify-end items-center text-gray-400 h-full'>
        {/* Right */}
        <div className='flex flex-row text-md font-semibold items-center'>
          <div className='p-2 hover:text-white transition ease-in-out duration-150'>Premium</div>
          <div className='p-2 hover:text-white transition ease-in-out duration-150'>การสนับสนุน</div>
          <div className='pr-6 pl-2 hover:text-white transition ease-in-out duration-150'>ดาวโหลด</div>
          <div className='w-px h-9 bg-white'></div>
        </div>
        {/* Left */}
        <div className='flex flex-row text-md font-semibold items-center'>
          <div className='p-6 hover:text-white transition ease-in-out duration-150'>ลงทะเบียน</div>
          <div className='p-6 hover:text-white transition ease-in-out duration-150'>
            <button className=' bg-white px-7 py-3 text-black rounded-full hover:scale-110 transition ease-in-out duration-150'>เข้าสู่ระบบ</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Topside;