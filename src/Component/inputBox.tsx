

export function InputBox({value}:any)
{

    return  <div className='m-2 '>
      <input type="text" className='max-w-md outline-none w-full p-4 text-right font-mono font-bold text-2xl' readOnly value={value}/>
    </div>
}