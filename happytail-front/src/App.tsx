import './index.css'
import Navbar from './components/Navbar/Navbar'
import PetSearch from './components/PetSearch/PetSearch'

function App() {

  return (
    <div className='flex align-center justify-center w-100 h-100'>
      <Navbar/>
      <PetSearch/>
    </div>
  )
}

export default App
