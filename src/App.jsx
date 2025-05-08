import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/Home/Home'
import BlogPages from './pages/Blog/Blog'
import DetailsPage from './pages/Details/Details'
import AddToPages from './pages/AddTo/AddTo'
import RegisterPage from './pages/AuthPage/Register'
import AddNewPages from './pages/AddTo/NewProducts'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path=':id' element={<DetailsPage />} />
        <Route path='/blog' element={<BlogPages />} />
        <Route path='/addCards' element={<AddToPages />} />
        <Route path='/addNewCards' element={<AddNewPages />} />
        <Route path='/auth' element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App