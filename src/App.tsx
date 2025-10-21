
function App() {

  return (
    <div className="h-screen w-screen flex justify-center bg-stone-100">
      <div className="flex flex-col items-center m-24 w-3xl">
        <div className="text-2xl">TODO LIST</div>
        <div className="flex w-full justify-between">
          <div>
            <button className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-400 cursor-pointer">Add Task</button>
          </div>
          <div>
            <select name="filter" id="filterList" className="bg-slate-300 p-2 rounded-lg text-black hover:bg-slate-200 cursor-pointer">
              <option selected value="all">All</option>
              <option value="done">Done</option>
              <option value="unfinished">Not Finished</option>
            </select>
          </div>
        </div>
        {/* end btns */}
        <div>list</div>
        {/* end list */}
      </div>
    </div>
  )
}

export default App
