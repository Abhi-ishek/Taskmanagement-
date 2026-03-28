import {registerUser} from "../services/authService"
import {useState} from "react"
import {useNavigate, Link} from "react-router-dom"

const Register = ()=> {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({name:"", email:"", password:""})
  const navigate = useNavigate();
  const handleChange = (e)=>
  {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  const hangleRegister = async (e)=>
  {
    e.preventDefault();
    setLoading(true);
    try{
      await registerUser(formData)
      navigate("/login")
    }
    catch(err)
    {
      alert(err.response?.data?.message || "Check agian invalid inputs");
    }
    finally
    {
      setLoading(false);
    }
  }

    return (
    <>
    <div className=" relative flex min-h-screen flex-col lg:flex-row items-center justify-center gap-10 overflow-hidden bg-slate-950 p-2">
        <h1 className="mb-2 text-xl text-center font-extrabold tracking-tight text-white
        animate-in fade-in slide-in-from-top duration-1000">
   Streamline Your Workflow. 
   <div className="text-xl text-center font-extrabold tracking-tight text-red">By</div>
   <span className="text-blue-500">Start Organizing Today</span>
</h1>
<form onSubmit={hangleRegister} className="rounded-3xl border border-white/50 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition-all hover:border-white/20 text-gray-500 max-w-[350px] mx-4 md:p-6 p-2 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10
animate-in fade-in slide-in-from-bottom duration-1000
">
  <h2 className="mb-2 text-3xl text-center font-extrabold tracking-tight text-white
  animate-in fade-in slide-in-from-top duration-2000">SignUp</h2>
  
    <input 
    id="name"
    name="name"
    className="w-full bg-white border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4 focus:ring-2 focus:ring-indigo-500/20" 
    type="text" 
    placeholder="Enter your Name" 
    required 
    onChange={handleChange}
  />
  <input 
    id="email"
    name="email"
    className="w-full bg-white border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4 focus:ring-2 focus:ring-indigo-500/20" 
    type="email" 
    placeholder="Enter your email" 
    required 
    onChange={handleChange}
  />
  
  <input 
    id="password"
    name="password"
    maxLength="8"
    minLength="4"
    className="w-full bg-white border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4 focus:ring-2 focus:ring-indigo-500/20" 
    type="password" 
    placeholder="Enter your password" 
    required 
    onChange={handleChange}
  />

  <button 
    type="submit" 
    className="w-full mb-3  mt-3 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white font-medium"
    disabled={loading}
  >
   { loading? "Signing... " : "Sign Up"}
  </button>
  <p className="text-center">
    Already have an account? <Link to="/login" className="text-blue-500 underline">Login here</Link>
  </p>
</form>
</div>
</>
    )
}
export default Register;