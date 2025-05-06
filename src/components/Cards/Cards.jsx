import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoHeart } from 'react-icons/go'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'
import useGetData from '../../hooks/GetHooks'

function valuetext(value) {
	return `${value}°C`
}

function Cards() {
	const [value, setValue] = useState([20, 37])

	useEffect(() => {
		
	})
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	
	const categories = [
		{
			id: 1,
			name: 'Small',
			count: '119',
		},
		{
			id: 2,
			name: 'Medium',
			count: '86',
		},
		{
			id: 3,
			name: 'Large',
			count: '78',
		},
	]

	const url = import.meta.env.VITE_API_URL;
	
	const {data, loading, error} = useGetData(url)

	console.log(data);
	

	if (loading) {
		return <div>Loading...</div>
	}
	if (error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<section className='max-w-[1211px] m-auto max-[1270px]:mx-[20px]'>
			<div className='flex items-start gap-[50px] max-[950px]:flex-col'>
				<div
					className={``}
				>
					<div className='w-[350px] max-[950px]:w-[450px] p-[18px] relative bg-[rgba(251,251,251,1)]'>
						<FaXmark
							className='min-[950px]:hidden text-[25px] absolute top-[10px] right-[10px]'
						/>
						<h1 className='text-[rgba(61,61,61,1)] font-bold text-[18px]'>
							Categories
						</h1>
						{data?.map(item => (
							<div
								className='group ml-[12px] mt-[7px] flex items-center justify-between mb-[20px]'
								key={item?._id}
							>
								<h2 className='font-["Inter"] text-[15px] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>
									{item?.title}
								</h2>
								<span className='text-[15px] font-["Inter"] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>
									({item?.count})
								</span>
							</div>
						))}

						<div>
							<h2 className='text-[rgba(61,61,61,1)] font-bold text-[18px] mt-[20px]'>
								Price Range
							</h2>
							<div className='ml-[12px]'>
								<Box className='w-[100%]'>
									<Slider
										getAriaLabel={() => 'Temperature range'}
										value={value}
										onChange={handleChange}
										valueLabelDisplay='auto'
										getAriaValueText={valuetext}
										sx={{ color: 'rgba(70,163,88,1)' }}
									/>
								</Box>
								<div className='mb-[16px]'>
									<span className='text-[15px] flex items-center gap-[5px] font-normal text-[rgba(61,61,61,1)] font-["Inter"]'>
										Price:
										<span className='text-[rgba(70,163,88,1)] font-bold text-[15px]'>
											$39 - $1230
										</span>
									</span>
								</div>
								<Link to='/filter-results'>
									<div className='w-[90px] h-[35px] flex items-center justify-center rounded bg-[rgba(70,163,88,1)]'>
										<p className='text-[rgba(255,255,255,1)] text-[16px] font-bold font-["Inter"]'>
											Filter
										</p>
									</div>
								</Link>
							</div>
						</div>

						<div className='w-full'>
							<h2 className='text-[rgba(61,61,61,1)] font-bold text-[18px] mt-[20px]'>
								Size
							</h2>
							<div className='ml-[12px] mt-[7px]  mb-[20px]'>
								{categories?.map(data => (
									<div
										key={data?.id}
										className='group flex items-center justify-between w-full mb-[20px]'
									>
										<span className='font-["Inter"] text-[15px] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>
											{data?.name}
										</span>
										<span className='text-[15px] font-["Inter"] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>
											({data?.count})
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className='w-full'>
					<div className='grid grid-cols-3 gap-6 mt-6 max-[1080px]:grid-cols-2 max-[950px]:grid-cols-3 max-[720px]:grid-cols-2 max-[470px]:grid-cols-1'>
						{/* {data1?.map(item => (
							<>
								<div
									key={item?._id}
									className='w-full h-[400px] relative'></div>
							</>
						))} */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Cards
