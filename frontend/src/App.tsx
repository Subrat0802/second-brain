import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className='dark:bg-[#080C13] dark:text-[#7F7F7F] '>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    </div>
  )
}

export default App
