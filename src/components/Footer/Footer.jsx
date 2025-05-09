import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<>
			<footer className='max-w-[1211px] m-auto max-[1270px]:mx-[20px]'>
				<div className='max-w-[1211px] m-auto bg-[rgba(251,251,251,1)] border-b-1 border-[rgba(70,163,88,0.2)]'>
					<div className="flex items-center justify-center max-[990px]:flex-col gap-[20px]">
						<div className="w-[100%] grid grid-cols-3 max-[620px]:grid-cols-2 max-[620px]:items-center max-[620px]:justify-center max-[620px]:flex max-[620px]:flex-col max-[620px]:gap-[20px] py-[24px]">
						<div className="px-[25px] border-r-1 border-[rgba(70,163,88,0.1)] max-[620px]:border-none">
							<img className='w-[90px] h-[80px] mb-[10px]' src="kakos.png" alt="kakos" />
							<h2 className='font-bold text-[17px] font-["Inter"] text-[rgba(61,61,61,1)]'>Garden Care</h2>
							<p className='text-[14px] text-[rgba(114,114,114,1)] font-["Inter"] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
						</div>
						<div className="px-[25px]">
							<img className='w-[90px] h-[80px] mb-[10px]' src="kaktus.png" alt="kakos" />
							<h2 className='font-bold text-[17px] font-["Inter"] text-[rgba(61,61,61,1)]'>Plant Renovation</h2>
							<p className='text-[14px] text-[rgba(114,114,114,1)] font-["Inter"] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
						</div>
						<div className="px-[25px] border-l-1 border-[rgba(70,163,88,0.1)] max-[620px]:border-none">
							<img className='w-[90px] h-[80px] mb-[10px]' src="choynak.png" alt="kakos" />
							<h2 className='font-bold text-[17px] font-["Inter"] text-[rgba(61,61,61,1)]'>Watering Graden</h2>
							<p className='text-[14px] text-[rgba(114,114,114,1)] font-["Inter"] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
						</div>
						</div>
						<div className="max-w-[354px] max-[990px]:max-w-[500px] px-[10px] py-[25px]">
							<h2 className='w-full max-[990px]:text-center font-bold text-[17px] font-["Inter"] text-[rgba(61,61,61,1)]'>Would you like to join newsletters?</h2>
							<form className='w-full bg-[#fff] shadow-md flex items-center rounded-[6px] pl-[11px] my-[17px]'>
								<input className='border-none outline-none w-full h-full text-[14px] font-normal font-["Inter"] text-[rgba(172,172,172,1)]' type="email" placeholder='enter your email address...'/>
								<button className='w-[85px] h-[40px] max-[620px]:w-[60px] max-[620px]:h-[30px] bg-[rgba(70,163,88,1)] font-bold text-[17px] text-[#fff] rounded-r-[6px] max-[620px]:text-[14px]' type='submit'>Join</button>
							</form>
							<p className='w-full text-[14px] max-[990px]:text-center text-[rgba(114,114,114,1)] font-["Inter"] font-normal'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
						</div>
					</div>
					<div className='bg-[rgba(70,163,88,0.1)] border-t-1 border-y-1 border-[rgba(70,163,88,1)] w-full h-auto grid grid-cols-4 max-[960px]:grid-cols-3 max-[740px]:grid-cols-2 max-[510px]:grid-cols-1 max-[510px]:flex max-[510px]:flex-col max-[510px]:items-center max-[510px]:justify-center gap-6 p-[20px]'>
						<div className=''>
							<img src='Logo.svg' alt='logo__footer' />
						</div>
						<Link className='flex items-center gap-[10px]'>
							<img
								className='w-[20px] h-[20px]'
								src='Location.svg'
								alt='message images'
							/>
							<div className=''>
								<p className='text-[rgba(61,61,61,1)] text-[14px] font-normal font-["Inter"]'>
									70 West Buckingham Ave.
								</p>
								<p className='text-[rgba(61,61,61,1)] text-[14px] font-normal font-["Inter"]'>
									Farmingdale, NY 11735
								</p>
							</div>
						</Link>
						<Link className='flex items-center gap-[10px]'>
							<img
								className='w-[20px] h-[20px]'
								src='message.svg'
								alt='message images'
							/>
							<p className='text-[rgba(61,61,61,1)] text-[14px] font-normal font-["Inter"]'>
								contact@greenshop.com
							</p>
						</Link>
						<a href='tel:+88 01911 717 490' className='flex items-center gap-[10px]'>
							<img
								className='w-[20px] h-[20px]'
								src='Calling.svg'
								alt='message images'
							/>
							<p className='text-[rgba(61,61,61,1)] text-[14px] font-normal font-["Inter"]'>
								+88 01911 717 490
							</p>
						</a>
					</div>
					<div className='grid grid-cols-3 px-[23px] max-[750px]:grid-cols-2 gap-[30px] py-[32px]'>
						<div className='flex items-start justify-items-start'>
							<div className='flex items-start justify-items-start flex-col'>
								<h2 className='text-[rgba(61,61,61,1)] font-bold font-["Inter"] text-[18px] max-[330px]:text-[16px] mb-[8px]'>
									My Account
								</h2>
								<Link className='text-[rgba(61,61,61,1)] font-normal max-[330px]:text-[12px] font-["Inter"] text-[14px] mb-[8px]'>
									My Account
								</Link>
								<Link className='text-[rgba(61,61,61,1)] max-[330px]:text-[12px] font-normal font-["Inter"] text-[14px] mb-[8px]'>
									Address
								</Link>
								<Link className='text-[rgba(61,61,61,1)] max-[330px]:text-[12px] font-normal font-["Inter"] text-[14px]'>
									Wishlist
								</Link>
							</div>
						</div>
						<div className='flex items-start justify-items-start flex-col'>
							<h2 className='text-[rgba(61,61,61,1)] font-bold font-["Inter"] text-[18px] max-[330px]:text-[16px] mb-[8px]'>
								Categories
							</h2>
							<Link className='text-[rgba(61,61,61,1)] max-[330px]:text-[12px] font-normal font-["Inter"] text-[14px] mb-[8px]'>
								House Plants
							</Link>
							<Link className='text-[rgba(61,61,61,1)] max-[330px]:text-[12px] font-normal font-["Inter"] text-[14px] mb-[8px]'>
								Potter Plants
							</Link>
							<Link className='text-[rgba(61,61,61,1)] max-[330px]:text-[12px] font-normal font-["Inter"] text-[14px] mb-[8px]'>
								Seeds
							</Link>
							<Link className='text-[rgba(61,61,61,1)] max-[330px]:text-[12px] font-normal font-["Inter"] text-[14px] mb-[8px]'>
								Small Plants
							</Link>
							<Link className='text-[rgba(61,61,61,1)] max-[330px]:text-[12px] font-normal font-["Inter"] text-[14px]'>
								Accessories
							</Link>
						</div>
						<div className='w-[100%]'>
							<h2 className='text-[rgba(61,61,61,1)] font-bold font-["Inter"] max-[342px]:text-[16px] text-[18px] mb-[20px]'>
								Social Media
							</h2>
							<div className='flex items-center gap-[10px] mb-[30px]'>
								<div className='min-w-[30px] cursor-pointer min-h-[30px] rounded border-1 border-[rgba(70,163,88,0.6)] flex items-center justify-center'>
									<FaFacebookF className='text-[rgba(70,163,88,0.6)]' />
								</div>
								<div className='min-w-[30px] cursor-pointer min-h-[30px] rounded border-1 border-[rgba(70,163,88,0.6)] flex items-center justify-center'>
									<FaInstagram className='text-[rgba(70,163,88,0.6)]' />
								</div>
								<div className='min-w-[30px] cursor-pointer min-h-[30px] rounded border-1 border-[rgba(70,163,88,0.6)] flex items-center justify-center'>
									<FaTwitter className='text-[rgba(70,163,88,0.6)]' />
								</div>
								<div className='min-w-[30px] cursor-pointer min-h-[30px] rounded border-1 border-[rgba(70,163,88,0.6)] flex items-center justify-center'>
									<FaLinkedinIn className='text-[rgba(70,163,88,0.6)]' />
								</div>
								<div className='min-w-[30px] cursor-pointer min-h-[30px] rounded border-1 border-[rgba(70,163,88,0.6)] flex items-center justify-center'>
									<FaYoutube className='text-[rgba(70,163,88,0.6)]' />
								</div>
							</div>
							<h2 className='text-[rgba(61,61,61,1)] font-bold font-["Inter"] text-[18px] max-[342px]:text-[16px]  mb-[13px]'>
								We accept
							</h2>
							<img className='min-w-[224px]' src='img.svg' alt='images' />
						</div>
					</div>
				</div>
				<p className='font-["Inter"] text-[14px] font-normal text-center text-[rgba(61,61,61,1)] my-[15px]'>&copy;2021 GreenShop. All Rights Reserved.</p>
			</footer>
		</>
	)
}

export default Footer
