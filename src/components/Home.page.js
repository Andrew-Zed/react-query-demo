import { useState } from "react"
import Modal from "./Modal/Modal"

 export const HomePage = () => {
   const [show, setShow] = useState(false)
  return(
  <div className="App">
    {/* Home Page */}
    <button onClick={() => setShow(true) }>Show Modal</button>
    <Modal onClose={() => setShow(false)} show = {show} />

  </div>
  )
}
