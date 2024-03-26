





export function Button({symbol,onClick}:any)
{
    return <div className="grid">
        <button className="bg-slate-400 rounded  hover:bg-blue-200  focus:ring-gray-500   " onClick={onClick}>{symbol}</button>
    </div> 
} 