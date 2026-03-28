import {useState, useEffect} from "react"
import axios from "axios"


function getNewQuote({showRefresh=false, style, maxlength=56}) {
    const [quote, setQuote] = useState("loading... quote")
    const [loading, setLoading] = useState(false)
    const getQuote = async ()=>
            {
      try {
        setLoading(true)
            const res = await fetch(`http://api.quotable.io/random?maxLength=${maxlength}&minLength=30/?tag=Inspirational`);
            const data = await res.json();
            if(data.content)
            {
                setQuote(data.content || "Focus on the process, not the outcome.");
            }
        } catch (error) {
            setQuote("Focus on the process, not the outcome.");
        }
               finally
               {
                setLoading(false)
               }
            }

    useEffect(()=>
        {
            getQuote();
        }, []
    )
return(
    <>
<div className="flex justify-center mt-1">
  <p className="flex items-center gap-2 text-gray-500 italic text-center max-w-md leading-relaxed">
    <span className={ style || "truncate text-blue-500 w-full"}>
      {quote}
        {showRefresh && (
      <button
        onClick={getQuote}
        className="text-gray-400 hover:text-indigo-600 transition duration-200">
        {loading ? (<span className="animate-pulse">...</span>) : ("🔄")}
      </button>
    )}
    </span>
  </p>
</div>
    </>
    )
    } 

export default getNewQuote
