import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState("")
  const [Details, setDetails] = useState("")
  const [Task, setTask] = useState([])

  const submitHandler=(e)=>{
      e.preventDefault()
      
      const copyTask=[...Task]
      copyTask.push({title,Details})
      setTask(copyTask)
      console.log(Task)

      settitle('')
      setDetails('')
  }


  const deleteNote=(idx)=>{
        const copyTask=[...Task]
        copyTask.splice(idx,1)
        setTask(copyTask)
  }

  return (
    <div className='bg-black lg:flex  text-white h-screen '>
      <form className='flex  lg:w-1/2 flex-col gap-4 p-10' onSubmit={submitHandler}>

          <h1 className='text-4xl font-medium '>Add Notes</h1>

          {/* PAHILA VALA INPUT */}
          <input 
          type="text"
          placeholder='Enter notes title'
          className='px-4 py-2 rounded border font-medium'
          value={title} 
          onChange={(e)=>{
            settitle(e.target.value)
          }}
        />
        
        {/* BADA VALA INPUT */}
        <textarea
          placeholder='Write detail' 
          className=' px-4 py-2 rounded border h-32 font-medium'
          value={Details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          >
        </textarea>

        <button className=' bg-white text-black py-2 px-4 rounded font-medium active:scale-95'>Add Note</button>

      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2 sm:border-t-2 lg:border-t-0 '>
            <h1 className='font-medium text-4xl'>Recent Notes</h1>
          <div className='flex flex-wrap gap-4 mt-4'  >
            {Task.map((ele,idx)=>{
              return <div key={idx} className=' flex flex-col justify-between items-start leading-tight pt-9 px-4 pb-4 h-55 w-43 rounded bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                <div>
                <h3 className='text-black text-xl font-bold'>{ele.title}</h3>
                <p className='text-gray-400 font-bold mt-4 text-xs'>{ele.Details}</p>
                </div>
                <button  
                onClick={()=>{
                  deleteNote(idx)
                }}
                className='cursor-pointer bg-red-400 w-full rounded active:scale-95 py-1'>Delete</button>
              </div>
            })}
          </div>
        </div>
    </div>
  )
}

export default App
