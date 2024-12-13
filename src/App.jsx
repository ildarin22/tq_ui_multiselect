import { useState } from 'react'

import './App.css'
import MultiSel from "./MultiSel"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MultiSel />
    </>
  )
}

export default App
