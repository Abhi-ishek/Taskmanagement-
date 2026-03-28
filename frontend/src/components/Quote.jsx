import {useState, useEffect} from "react"
import axios from "axios"


function getNewQuote({showRefresh=false, style, maxlength=56}) {
    const [quote, setQuote] = useState("loading... quote")
    const [loading, setLoading] = useState(false)
    const getQuote = async ()=>
            {
      try {
        setLoading(true)
          const tags = ["motivation", "inspiration", "happiness", "love", "wisdom"];
          const randomTag = tags[Math.floor(Math.random() * tags.length)];
          const url = `https://quoteslate.vercel.app/api/quotes/random?minLength=30&maxLength=${maxlength}&tags=${randomTag}`;
          const res = await fetch(url);
          const data = await res.json();
            if(data.quote)
            {
                setQuote(data.quote || "Focus on the process, not the outcome.");
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
  <p className="flex items-center gap-2 text-gray-500  text-center max-w-md leading-relaxed">
    <span className={  style || "truncate text-blue-500 lg:text-4xl w-full"}>
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
