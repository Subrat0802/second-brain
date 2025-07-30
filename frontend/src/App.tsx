import './App.css'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className='dark:bg-[#0f0f0f] dark:text-white'>
      <p className='font-inter '>Hello</p>
      <p className='font-montserrat '>Hello</p>
      <p className='font-poppins'>Hello</p>
      <p className='font-bitcount text-3xl font-extralight '>Hello</p>
      <ThemeToggle />
    </div>
  )
}

export default App
