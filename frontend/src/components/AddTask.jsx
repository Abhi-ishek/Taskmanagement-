
const AddTask = ({handleAddTask, handleEditedTask, editingTask, addTask, setAddTask, setShowToggle})=>
{

    return (
    <>
{
<div className="fixed top-30 left-0 w-screen z-5 flex items-center justify-center overflow-hidden">
        <form className="rounded-3xl border border-white/400 bg-white/5 p-1 shadow-2xl backdrop-blur-xl transition-all hover:border-white/20 text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <h3 className="text-xl font-bold mb-2 text-center text-bold text-white">{editingTask? "Edit Task":"Create New Task"}</h3>
        <input 
            className="w-full bg-white border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4 focus:ring-2 focus:ring-indigo-500/20" 
            placeholder="Task Title" 
            value={editingTask? addTask.title:undefined}
            onChange={(e) => setAddTask({...addTask, "title": e.target.value})} 
            required
        />
        <textarea 
            className="w-full bg-white border mb-2 border-gray-500/30 outline-none rounded-sm py-2 px-2 focus:ring-2 focus:ring-indigo-500/20 resize-none" 
            placeholder="Task Content"
            value={editingTask? addTask.content:undefined}
            onChange={(e) => {
        if (e.target.value.length <= 500) 
             { setAddTask({...addTask, content: e.target.value}); }}}
            onInput={(e)=>{e.target.style.height = "auto"; e.target.style.height = e.target.scrollHeight + "px"}}
            required
        />
        <div className="flex gap-2">
            <button type="button" onClick={() => setShowToggle(false)} className=" text-white ">Cancel</button>
            <button type="button" onClick={(e)=>{editingTask? handleEditedTask(e):handleAddTask(e)
            }} className="bg-blue-600 text-white px-4 py-2 rounded">{editingTask? "Save Changes":"Save Task"}</button>
        </div>
    </form>
</div>
}
    </> )
}

export default AddTask