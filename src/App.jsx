import { Route, Routes, Navigate } from 'react-router-dom'
import HomePages from './pages/Home/Home'
import BlogPages from './pages/Blog/Blog'
import DetailsPage from './pages/Details/Details'
import AddToPages from './pages/AddTo/AddTo'
import NotError from './pages/NotFaund/NotFaund'
import Admen from './pages/Account/Admen'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token') 
  return token ? children : <Navigate to="/auth" replace />
}

function App() {
  return (
    <>
      <Header /> 
      
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/blog' element={<BlogPages />} />
        <Route path='/products/:id' element={<DetailsPage />} />

        <Route
          path='/addCards'
          element={
            <ProtectedRoute>
              <AddToPages />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path='/account'
          element={
            <ProtectedRoute>
              <Admen />
            </ProtectedRoute>
          }
        /> */}

        <Route path='*' element={<NotError />} />
      </Routes>

      <Footer /> 
    </>
  )
}

export default App
