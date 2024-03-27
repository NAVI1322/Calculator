import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const list = ['(', ')', '%', 'AC', 7, 8, 9, '÷', 6, 5, 4, 'x', 3, 2, 1, '-', 0, '.', '=', '+'];

  const handleClick = (value: any) => {
    if (value === "=") {
      evaluate();
    }
    else if (value === "AC") {
      setInputValue("")
    } else {
      setInputValue(inputValue === "0" ? value : inputValue + value);
    }
  };
  const evaluate = () => {
    try {
      const result = eval(inputValue.replace(/x/g, '*').replace(/÷/g, '/'));
      setInputValue(result.toString());
    } catch (error) {
      setInputValue("Error");
    }
  };

  return (
    <div className="p-12 min-w-72 max-w-2xl">
      <Input className="min-w-72 max-w-2xl text-right my-4" readOnly value={inputValue} />

      <div className="grid grid-cols-4 gap-4">
        {
          list.map(listItem => <Button variant={"secondary"} value={listItem} key={listItem} onClick={() => handleClick(listItem)}>{listItem}</Button>)
        }
      </div>
    </div >
  )
}

export default App
