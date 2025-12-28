import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {
  return (
    <div id='right' className='h-full p-6 w-3/4 overflow-x-auto  flex gap-5 flex-nowrap '>
     {props.users.map((ele,idx)=>{
            return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag}  />
     })}
     
    </div>
  )
}

export default RightContent
