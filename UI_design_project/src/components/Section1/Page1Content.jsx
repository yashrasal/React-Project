import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Content(props) {
  return (
    <div className='flex gap-10 items-center h-[86vh]  py-10   px-18'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
