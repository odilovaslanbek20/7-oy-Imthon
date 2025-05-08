import cardsData from './main'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

function Hero() {
	return (
		<>
			<section className='max-w-[1211px] mt-[12px] mb-[46px] m-auto max-[1270px]:mx-[20px] bg-[linear-gradient(97.77deg,rgba(245,245,245,0.5)_-23.46%,rgba(245,245,245,0.5)_107.51%)]'>
				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					autoplay={{ delay: 4000 }}
					loop={true}
					className='relative'
				>
					{cardsData?.map(card => {
						return (
							<SwiperSlide key={card?.id}>
								<div className='p-[40px] max-[530px]:p-[20px] mb-[20px]'>
									<div className='flex items-center gap-[50px] max-[898px]:gap-[20px] max-[471px]:flex-col max-[471px]:gap-[0px]'>
										<div className=''>
											<h2 className='text-[rgba(61,61,61,1)] max-[786px]:text-[12px] font-["Inter"] font-medium text-[14px] uppercase max-[530px]:text-[10px]'>
												{card?.body}
											</h2>
											<h1 className='max-[1080px]:text-[60px] max-[980px]:text-[50px] max-[1080px]:leading-[60px] max-[980px]:leading-[50px] text-[70px] font-black font-["Inter"] max-[898px]:text-[40px] max-[786px]:text-[30px] max-[898px]:leading-[40px] max-[786px]:leading-[30px] max-[652px]:text-[20px] max-[652px]:leading-[20px] uppercase leading-[70px] mt-[7px] max-[530px]:text-[18px] '>
												{card?.title}
												<span className='text-[rgba(70,163,88,1)]'>
													{card?.title1}
												</span>
											</h1>
											<p className='text-[14px] font-normal max-[786px]:text-[12px] font-["Inter"] text-[rgba(114,114,114,1)] mt-[5px] max-w-[560px] max-[550px]:hidden'>
												{card?.text}
											</p>
											<p className='text-[12px] min-[550px]:hidden font-normal font-["Inter"] text-[rgba(114,114,114,1)] mt-[5px] max-w-[560px] max-[530px]:text-[11px]'>
												{card?.text1}
											</p>
											<button className='w-[140px] h-[40px] rounded-[6px] bg-[rgba(70,163,88,1)] font-bold text-[16px] font-["Inter] text-[#fff] mt-[44px] max-[980px]:mt-[30px] max-[786px]:w-[110px] max-[786px]:h-[35px] max-[898px]:mt-[20px] max-[786px]:mt-[15px] max-[786px]:text-[14px] max-[652px]:bg-transparent max-[652px]:text-[rgba(70,163,88,1)] max-[652px]:flex max-[652px]:items-center max-[652px]:gap-[1px] max-[652px]:mt-0 max-[530px]:text-[12px] cursor-pointer'>
												{card?.btnText}
												<FaArrowRightLong className='text-[rgba(70,163,88,1)] min-[651px]:hidden' />
											</button>
										</div>
										<div className='max-w-[500px] relative max-[471px]:ml-[30px]'>
											<img
												className='absolute bottom-0 w-[135px] max-[530px]:ml-[-30px]'
												src={card?.images1}
												alt='resm1'
											/>
											<img
												className='w-[600px]'
												src={card?.images}
												alt='resm'
											/>
										</div>
									</div>
									
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</section>
		</>
	)
}

export default Hero
