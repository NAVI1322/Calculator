import { useState } from "react"


interface Symbol {
    
}


export function Button({symbol}:any)
{
    // const [cal,SetCal]= useState(" ")

 


    return <div className="m-2">
        <button className="bg-slate-400 rounded px-4 py-2 hover:bg-blue-200" >{symbol}</button>
    </div>
}