import { useParams } from 'react-router-dom'
import useGetData from '../../hooks/GetHooks'
import React, { useState } from 'react'

function CardsDetails() {
	const { id } = useParams()
	const url = import.meta.env.VITE_API_URL
	const [quantity, setQuantity] = useState(1)
	const [size, setSize] = useState('S')

	const { data, loading, error } = useGetData(`${url}/${id}`)

	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<div className='w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin'></div>
			</div>
		)
	}

	if (error) {
		return (
			<div className='flex items-center justify-center h-screen px-4'>
				<div className='bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg shadow-md w-full max-w-md text-center'>
					<h2 className='text-xl font-semibold mb-2'>Xatolik!</h2>
					<p>{error.message}</p>
				</div>
			</div>
		)
	}

	console.log(data)


	const sizes = ['S', 'M', 'L', 'XL']

	return (
		<section className='max-w-[1211px] mx-auto my-[50px] px-4'>
			<div className='flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto p-10 text-gray-800'>
				<div className='flex flex-col lg:flex-row gap-6'>
					<div className='flex lg:flex-col gap-4'>
						{['thumb1.png', 'thumb2.png', 'thumb3.png', 'thumb4.png'].map(
							(src, i) => (
								<img
									key={i}
									src='../../../public/cardsImg.svg'
									alt={`Thumb ${i}`}
									className={`w-16 h-16 border ${
										i === 1 ? 'border-green-500' : ''
									} rounded-md object-cover cursor-pointer`}
								/>
							)
						)}
					</div>

					<div className='w-full max-w-md'>
						<img
							src='../../../public/cardsImg.svg'
							alt='Main Product'
							className='w-full h-auto rounded-md shadow-md'
						/>
					</div>
				</div>

				<div className='flex-1 space-y-4'>
					<h1 className='text-3xl font-bold'>Barberton Daisy</h1>
					<p className='text-green-600 text-2xl font-semibold'>$119.00</p>

					<div className='flex items-center gap-1 text-yellow-500'>
						{'⭐⭐⭐⭐☆'.split('').map((star, i) => (
							<span key={i}>{star}</span>
						))}
						<span className='ml-2 text-sm text-gray-600'>
							19 Customer Review
						</span>
					</div>

					<p className='text-gray-700'>
						The ceramic cylinder planters come with a wooden stand to help
						elevate your plants off the ground.
					</p>

					<div>
						<p className='font-semibold mb-2'>Size:</p>
						<div className='flex gap-2'>
							{sizes.map(s => (
								<button
									key={s}
									onClick={() => setSize(s)}
									className={`w-10 h-10 rounded-full border ${
										size === s
											? 'border-green-500 text-green-600 font-bold'
											: ''
									}`}
								>
									{s}
								</button>
							))}
						</div>
					</div>

					<div className='flex items-center gap-4 mt-4'>
						<div className='flex items-center gap-2'>
							<button
								onClick={() => setQuantity(Math.max(1, quantity - 1))}
								className='w-8 h-8 flex items-center justify-center border rounded-full text-xl'
							>
								-
							</button>
							<span>{quantity}</span>
							<button
								onClick={() => setQuantity(quantity + 1)}
								className='w-8 h-8 flex items-center justify-center border rounded-full text-xl'
							>
								+
							</button>
						</div>

						<button className='bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition'>
							BUY NOW
						</button>
						<button className='border border-green-600 text-green-600 px-6 py-2 rounded-md hover:bg-green-50 transition'>
							ADD TO CART
						</button>
						<button className='border p-2 rounded-md text-green-600 hover:bg-green-50 transition'>
							♡
						</button>
					</div>

					<p className='text-sm text-gray-500 mt-4'>SKU: 1995751877966</p>
					<p className='text-sm text-gray-500'>Categories: Potter Plants</p>
					<p className='text-sm text-gray-500'>Tags: Home, Garden, Plants</p>

					<div className='flex items-center gap-3 mt-4 text-sm text-gray-600'>
						<span>Share this products:</span>
						<span>📘</span>
						<span>🐦</span>
						<span>💼</span>
						<span>✉️</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CardsDetails
