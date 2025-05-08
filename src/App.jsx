import { Route, Routes, Navigate } from 'react-router-dom'
import HomePages from './pages/Home/Home'
import BlogPages from './pages/Blog/Blog'
import DetailsPage from './pages/Details/Details'
import AddToPages from './pages/AddTo/AddTo'
import RegisterPage from './pages/AuthPage/Register'
import AddNewPages from './pages/AddTo/NewProducts'
import NotError from './pages/NotFaund/NotFaund'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token') 
  return token ? children : <Navigate to="/auth" replace />
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePages />} />
      <Route path='/blog' element={<BlogPages />} />
      <Route path='/products/:id' element={<DetailsPage />} />
      <Route path='/auth' element={<RegisterPage />} />

      <Route
        path='/addCards'
        element={
          <ProtectedRoute>
            <AddToPages />
          </ProtectedRoute>
        }
      />
      <Route
        path='/addNewCards'
        element={
          <ProtectedRoute>
            <AddNewPages />
          </ProtectedRoute>
        }
      />

      <Route path='*' element={<NotError />} />
    </Routes>
  )
}

export default App
