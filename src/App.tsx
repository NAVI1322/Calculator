import { Button } from "./components/ui/button"
import "./App.css"
import { Input } from "./components/ui/input"

function App() {
  const list = ['(', ')', '%', 'AC', 7, 8, 9, '÷', 6, 5, 4, 'x', 3, 2, 1, '-', 0, '.', '=', '+']
  return (
    <div className="p-12 min-w-72 max-w-2xl">
      <Input className="min-w-72 max-w-2xl text-right my-4" value={0} />

      <div className="grid grid-cols-4 gap-4">
        {
          list.map(list => <Button variant={"secondary"}>{list}</Button>)
        }
      </div>
    </div>
  )
}

export default App
