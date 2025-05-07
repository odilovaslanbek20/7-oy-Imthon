import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/Home/Home'
import BlogPages from './pages/Blog/Blog'
import DetailsPage from './pages/Details/Details'
import AddToPages from './pages/AddTo/AddTo'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path=':id' element={<DetailsPage />} />
        <Route path='/blog' element={<BlogPages />} />
        <Route path='/addCards' element={<AddToPages />} />
      </Routes>
    </>
  )
}

export default App