import React from 'react'

function RightCardContent(props) {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full flex flex-col p-8 justify-between ' >
                <h1 className='rounded-full text-2xl  bg-white h-12 w-12 font-semibold flex items-center justify-center'>{props.id+1}</h1>
                <div>
                    <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, cupiditate eveniet perspiciatis dolore numquam veniam.</p>
                    <div className='flex justify-between'>
                        <button className='font-medium bg-blue-600 text-white px-8 py-2 rounded-full'>{props.tag}</button>
                        <button className='font-medium bg-blue-600 text-white px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default RightCardContent
