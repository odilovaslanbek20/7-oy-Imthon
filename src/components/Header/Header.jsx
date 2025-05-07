import { useState } from 'react'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'
import { FiShoppingCart } from 'react-icons/fi'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
// import AuthModal from '../Auth/Register'

function Header() {
	const [menu, setMenu] = useState(false)
	// const [modalOpen, setModalOpen] = useState(false)

	return (
		<>
			<header className='max-[1270px]:mx-[20px] max-w-[1211px] m-auto mt-[25px] mb-[12px] pb-[18px] border-b-[1px] border-[rgba(70,163,88,0.5)]'>
				<div className='flex items-center justify-between'>
					<Link to='/'>
						<img src='Logo.svg' alt='logotip' className='w-[140px]' />
					</Link>

					<div className='flex items-center gap-[50px] max-[670px]:hidden'>
						<Link
							to='/'
							className='text-[16px] font-normal hover:text-[rgba(70,163,88,1)]'
						>
							Home
						</Link>
						<Link
							to='/blog'
							className='text-[16px] font-normal hover:text-[rgba(70,163,88,1)]'
						>
							Blog
						</Link>
					</div>

					<div className='flex items-center gap-[30px]'>
						<Link
							to='/addCards'
							className='flex items-center gap-8 max-[380px]:gap-[20px]'
						>
							<div className='relative cursor-pointer'>
								<p className='h-[12px] w-[12px] text-[10px] absolute ml-[12px] mt-[-3px] rounded-full flex items-center justify-center text-[#fff] bg-[rgba(70,163,88,1)]'>
									3
								</p>
								<FiShoppingCart className='text-[20px]' />
							</div>
						</Link>

						<div
							// onClick={() => setModalOpen(true)}
							className='w-[100px] h-[35px] bg-[rgba(70,163,88,1)] rounded-[6px] flex items-center justify-center gap-1 cursor-pointer px-[8px] max-[670px]:hidden'
						>
							<RiLogoutCircleRLine className='text-[20px] text-[#fff]' />
							<p className='text-[#fff] font-medium text-[16px] truncate'>
								Login
							</p>
						</div>

						<FaBarsStaggered
							onClick={() => setMenu(true)}
							className='text-[20px] cursor-pointer hidden max-[670px]:block'
						/>
					</div>

					{/* <AuthModal open={modalOpen} handleClose={() => setModalOpen(false)} /> */}
				</div>
			</header>

			<div
				className={`${
					!menu ? 'mr-[-100%]' : 'mr-0'
				} transition-all min-[670px]:hidden fixed top-0 right-0 w-[300px] min-h-screen bg-[#000000]/70 backdrop-blur-md z-50`}
			>
				<FaXmark
					onClick={() => setMenu(false)}
					className='text-[#fff] text-[30px] absolute right-[10px] cursor-pointer top-[10px]'
				/>

				<div className='flex flex-col items-center mt-[50px] gap-[20px]'>
					<Link
						to='/'
						onClick={() => setMenu(false)}
						className='text-[#fff] text-[16px]'
					>
						Home
					</Link>
					<Link
						to='/blog'
						onClick={() => setMenu(false)}
						className='text-[#fff] text-[16px]'
					>
						Blog
					</Link>

					<div
						onClick={() => {
							setMenu(false)
							// setModalOpen(true) 
						}}
						className='w-[150px] h-[35px] bg-[rgba(70,163,88,1)] rounded-[6px] flex items-center justify-center gap-1 cursor-pointer'
					>
						<RiLogoutCircleRLine className='text-[20px] text-[#fff]' />
						<p className='text-[#fff] truncate'>Login</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
