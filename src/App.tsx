import { useState } from 'react'
import { Button } from './Component/button'
import { InputBox } from './Component/inputBox'

import Array from './Component/Content'






function App() {


 
  const [Input,setInput] = useState<string>("")

  const handleButtonClick = (e:string) => {

     e= e.replace('%', '*0.01').replace('x','*').replace('÷','/')


    setInput(prevInput => prevInput + e);
  };

  const handleClear = () => {
    setInput('');
  };
  
  const handleEval = () =>
  {
    try {
      setInput(eval(Input).toString());
    } catch (error) {
      setInput('Error');
      setTimeout(() => {
        setInput("")
      }, 3000);
    }
   
  }

    return (
    <div className="flex justify-center items-center h-screen border-4 ">





        <div className=' bg-slate-300 border-8   border-slate-400  '>
                <InputBox value={Input}/>
              <div className='grid grid-cols-4 gap-2 w-82  h-80 m-2' >
            {Array.map(e=><Button symbol={e} onClick={()=>{
                if(e=="AC")
                handleClear()
                else if(e==="=")
               handleEval() 
                else
                handleButtonClick(e)
            }}/>)}
              </div>
          </div>

        
    </div> 
    )
  }
export default App
