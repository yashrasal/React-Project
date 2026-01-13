import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'

function App() {

  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)
  const getData=async()=>{
    console.log('Data aa gaya')
    let response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=16`)
    setuserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])
  



  let placeUserData = <h3 className='text-gray-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Loding...</h3>
  if(userData.length>0){
    placeUserData=userData.map(function(ele,idx){
      return  <div key={idx}>
                <Cards ele={ele}/>
              </div>
    })
  }




  return (
    <div className='bg-black text-white h-screen p-4 overflow-auto'>
        
      <div className='flex flex-wrap gap-4 h-[82%]'>
        {placeUserData}
      </div>
      <div className='flex justify-center gap-6 m-15'>
        <button className='bg-amber-400 text-black rounded active:scale-95 px-4 py-2'
        onClick={()=>{
          if(index>1){
            setindex(index-1)
            setuserData([])
          }
        }}
        style={{opacity: index==1 ? 0.5:1}}

        >prev</button>
        <h2>page {index}</h2>
        <button className='bg-amber-400 text-black rounded active:scale-95 px-4 py-2'
        onClick={()=>{
          setindex(index+1)
          setuserData([])
        }}
        >next</button>
      </div>
    </div>
  )
}

export default App
