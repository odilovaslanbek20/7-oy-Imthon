import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/Home/Home'
import BlogPages from './pages/Blog/Blog'
import DetailsPage from './pages/Details/Details'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path=':id' element={<DetailsPage />} />
        <Route path='/blog' element={<BlogPages />} />
      </Routes>
    </>
  )
}

export default App