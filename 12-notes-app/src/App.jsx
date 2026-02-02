import { useState } from "react";


const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')

  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copytask = [...task]
    copytask.push({title,details})
    settask(copytask)

    settitle('')
    setdetails('')
  };

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    settask(copyTask)
  }

  return (
    <div className="h-screen w-full lg:flex items-start bg-black text-white ">
      <form
        className="lg:w-1/2 flex flex-col gap-4 p-10"
        onSubmit={(e) => submitHandler(e)}
      >
        <h1 className="text-4xl font-bold pb-4">Add Notes</h1>
        
        {/* notes heading */}
        <input
          className="py-3 px-4 text-xl border border-white rounded-md"
          type="text"
          value={title}
          onChange={(e)=>settitle(e.target.value)}
          placeholder="Enter Note Heading"
        />
        
        {/* notes details */}
        <textarea
          className="py-3 px-4 h-[20vh] text-xl border border-white rounded-md"
          placeholder="Enter details"
          value={details}
          onChange={e=>setdetails(e.target.value)}
        ></textarea>

        <button className="bg-white text-black active:scale-95 py-3 text-xl rounded-md font-medium">
          Add Node
        </button>
      </form>
      <div className="p-10 lg:w-1/2 h-full lg:border-l-2 overflow-hidden">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold pb-4">Recent Notes</h1>

          <div className="flex flex-wrap items-center gap-6 overflow-auto">
            {task.map((note,idx)=>(
            <div className="relative w-52 h-52 py-6 px-5 text-black rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div onClick={()=>deleteNote(idx)} className="absolute right-5 px-1.5 py-0.5 text-sm rounded-full bg-black text-white active:bg-red-500 transition-all"><i className="ri-delete-bin-4-fill"></i></div>
              <h1 className="text-xl font-bold">{note.title}</h1>
              <h3 className="text-md font-medium text-gray-700">{note.details}</h3>
            </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
