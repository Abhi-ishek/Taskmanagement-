
import GetNewQuote from "./Quote.jsx"
function NavBar({handleLogout, setShowToggle, setEditingTask})
{
    return(
<nav className="animate-in fade-in slide-in-from-top duration-1000  z-9999 mx-1 bg-slate-950/60 backdrop-blur-lg rounded-full overflow-hidden px-2 py-2 border border-white/80 sticky top-2">
  <div className=" px-3 py-2">
    <div className=" flex justify-center">
         <div className="fixed top-3 left-5 text-white whitespace-nowrap">
  <span className="text-3xl font-extrabold tracking-tight">Task</span>
  <span className="text-sm text-bold font-light text-white ml-1.5 align-baseline ">by  </span>
</div>
<div className="flex items-center justify-between gap-4 w-full">
  <div className="fixed top-5 right-3 md:right-4 md:top-3 flex items-center gap-2 shrink-0">
    <button 
      onClick={() => { setEditingTask(false); setShowToggle(true); }} 
      className="whitespace-nowrap px-1 py-1.5 text-sm md:text-2xl font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-200"
    >
      + Task
    </button>
    <button 
      onClick={() => { handleLogout(); }} 
      className="whitespace-nowrap px-1 py-1.5 text-sm md:text-2xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-200"
    >
      Logout
    </button>
  </div>

</div>
</div>
    <div className="text-xs mt-8 text-gray-400 mt-03 truncate wrap-break-word px-2">
      <GetNewQuote showRefresh={true} style="fixed md:text-xl bottom-0 italic lg:bottom-8 left-3 sm:left-1/2 sm:-translate-x-1/2 px-1 break-words  text-blue-300 font-semibold rounded-sm break-words" />
    </div>
</div>

</nav>


    )
}

export default NavBar