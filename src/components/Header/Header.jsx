import { useState, useEffect, useRef } from 'react'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'
import { FiShoppingCart } from 'react-icons/fi'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import AuthModal from '../Auth/Register'
import { useTranslation } from 'react-i18next'

function LanguageDropdown({ language, setLanguage }) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'uz', label: "O'zbekcha" },
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
  ]

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const onSelectLang = (code) => {
    setLanguage(code)
    localStorage.setItem('language', code)
    setOpen(false)
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer border border-[rgba(70,163,88,1)] rounded px-3 max-[500px]:px-[8px] max-[500px]:py-[2px] py-1 text-[16px] font-medium text-[rgba(70,163,88,1)] select-none"
      >
        {language.toUpperCase()}
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-[120px] bg-white border border-gray-300 rounded shadow-md z-50">
          {languages.map(({ code, label }) => (
            <li
              key={code}
              onClick={() => onSelectLang(code)}
              className={`cursor-pointer px-4 py-2 hover:bg-green-500 hover:text-white ${
                language === code ? 'bg-green-500 text-white' : ''
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Header() {
  const { t, i18n } = useTranslation() 
  const [menu, setMenu] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [token, setToken] = useState('')
  const [name, setName] = useState('Login')
  const [language, setLanguage] = useState(i18n.language || 'uz')

  const navigate = useNavigate()

  const carts = JSON.parse(localStorage.getItem('cart'))

  useEffect(() => {
    const checkLocalStorage = () => {
      const tokenFromLocalStorage = localStorage.getItem('token')
      setToken(tokenFromLocalStorage)

      if (tokenFromLocalStorage) {
        const userNameFromLocalStorage = localStorage.getItem('userName')
        setName(userNameFromLocalStorage || 'Login')
      } else {
        setName('Login')
      }

      const langFromLocalStorage = localStorage.getItem('language') || 'uz'
      setLanguage(langFromLocalStorage)
      i18n.changeLanguage(langFromLocalStorage)  // <-- tilni i18n ga ham o'zgartirish
    }

    checkLocalStorage()

    const intervalId = setInterval(checkLocalStorage, 1000)

    return () => clearInterval(intervalId)
  }, [i18n])

  const handleCartClick = () => {
    if (token) {
      navigate('/addCards')
    } else {
      setModalOpen(true)
    }
  }

  return (
    <>
      <header className="max-[1270px]:mx-[20px] max-w-[1211px] m-auto mt-[25px] mb-[12px] pb-[18px] border-b-[1px] border-[rgba(70,163,88,0.5)]">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src="Logo.svg" alt="logotip" className="w-[140px]" />
          </Link>

          <div className="flex items-center gap-[50px] max-[670px]:hidden">
            <>
              <Link
                to="/"
                className="text-[16px] font-normal hover:text-[rgba(70,163,88,1)]"
              >
                {t('home')}
              </Link>
              <Link
                to="/blog"
                className="text-[16px] font-normal hover:text-[rgba(70,163,88,1)]"
              >
                {t('blog')}
              </Link>
            </>
          </div>

          <div className="flex items-center gap-[30px] max-[360px]:gap-[20px]">
            <div
              onClick={handleCartClick}
              className="flex items-center gap-8 max-[380px]:gap-[20px]"
            >
              <div className="relative cursor-pointer">
                <p className="h-[12px] w-[12px] text-[10px] absolute ml-[12px] mt-[-3px] rounded-full flex items-center justify-center text-[#fff] bg-[rgba(70,163,88,1)]">
                  {token
                    ? (carts && carts.length > 0 && carts[0]?.products?.length) || 0
                    : 0}
                </p>

                <FiShoppingCart className="text-[20px]" />
              </div>
            </div>

            <div className="">
              <LanguageDropdown language={language} setLanguage={(code) => {
                setLanguage(code)
                i18n.changeLanguage(code)
                localStorage.setItem('language', code)
              }} />
            </div>

            {token ? (
              <Link
                to="/account"
                className="w-[100px] h-[35px] bg-[rgba(70,163,88,1)] rounded-[6px] flex items-center justify-center gap-1 cursor-pointer px-[8px] max-[670px]:hidden"
              >
                <RiLogoutCircleRLine className="text-[20px] text-[#fff]" />
                <p className="text-[#fff] font-medium text-[16px] truncate">{name}</p>
              </Link>
            ) : (
              <div
                onClick={() => setModalOpen(true)}
                className="w-[100px] h-[35px] bg-[rgba(70,163,88,1)] rounded-[6px] flex items-center justify-center gap-1 cursor-pointer px-[8px] max-[670px]:hidden"
              >
                <RiLogoutCircleRLine className="text-[20px] text-[#fff]" />
                <p className="text-[#fff] font-medium text-[16px] truncate">Login</p>
              </div>
            )}

            <FaBarsStaggered
              onClick={() => setMenu(true)}
              className="text-[20px] cursor-pointer hidden max-[670px]:block"
            />
          </div>
        </div>
      </header>

      <AuthModal open={modalOpen} handleClose={() => setModalOpen(false)} />

      <div
        className={`${
          !menu ? 'mr-[-100%]' : 'mr-0'
        } transition-all min-[670px]:hidden fixed top-0 right-0 w-[300px] min-h-screen bg-[#000000]/70 backdrop-blur-md z-50`}
      >
        <FaXmark
          onClick={() => setMenu(false)}
          className="text-[#fff] text-[30px] absolute right-[10px] cursor-pointer top-[10px]"
        />

        <div className="flex flex-col items-center mt-[50px] gap-[20px]">
          <Link
            to="/"
            onClick={() => setMenu(false)}
            className="text-[16px] text-[#fff] font-normal hover:text-[rgba(70,163,88,1)]"
          >
            {t('home')}
          </Link>
          <Link
            to="/blog"
            onClick={() => setMenu(false)}
            className="text-[16px] text-[#fff] font-normal hover:text-[rgba(70,163,88,1)]"
          >
            {t('blog')}
          </Link>

          {token ? (
            <Link
              to="/account"
              onClick={() => setMenu(false)}
              className="w-[150px] h-[35px] bg-[rgba(70,163,88,1)] rounded-[6px] flex items-center justify-center gap-1 cursor-pointer"
            >
              <RiLogoutCircleRLine className="text-[20px] text-[#fff]" />
              <p className="text-[#fff] truncate">{name}</p>
            </Link>
          ) : (
            <div
              onClick={() => {
                setMenu(false)
                setModalOpen(true)
              }}
              className="w-[150px] h-[35px] bg-[rgba(70,163,88,1)] rounded-[6px] flex items-center justify-center gap-1 cursor-pointer"
            >
              <RiLogoutCircleRLine className="text-[20px] text-[#fff]" />
              <p className="text-[#fff] truncate">Login</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
