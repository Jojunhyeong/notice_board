import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopNav } from './components/common/TopNav'
import { Home } from './components/main/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNav/>
      <Home/>
    </>
  )
}

export default App
