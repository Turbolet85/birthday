import data from "./data.ts";
import List from "./components/List.tsx";
import {useState} from "react";

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className={'container'}>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button type={"button"} className={'btn btn-block'} onClick={()=>setPeople([])}>Clear list</button>
      </section>
    </main>
  )
}

export default App
