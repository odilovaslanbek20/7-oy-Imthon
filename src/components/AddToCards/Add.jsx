import React, { useState } from 'react'
import { Minus, Plus, Trash } from 'lucide-react'
import useGetData from '../../hooks/GetHooks'

const Add = () => {
	const [cartItems, setCartItems] = useState([
		{
			id: 1,
			title: 'Barberton Daisy',
			sku: '1995751877966',
			price: 119,
			quantity: 2,
			image: 'https://i.imgur.com/YZFp5oU.png',
		},
		{
			id: 2,
			title: 'Blushing Bromeliad',
			sku: '19957518757065',
			price: 139,
			quantity: 6,
			image: 'https://i.imgur.com/MxT6H2C.png',
		},
		{
			id: 3,
			title: 'Aluminum Plant',
			sku: '1995751877786',
			price: 179,
			quantity: 9,
			image: 'https://i.imgur.com/fDxFyyU.png',
		},
	])

	const handleQuantity = (id, type) => {
		setCartItems(prev =>
			prev.map(item =>
				item.id === id
					? {
							...item,
							quantity:
								type === 'inc'
									? item.quantity + 1
									: item.quantity > 1
									? item.quantity - 1
									: 1,
					  }
					: item
			)
		)
	}

	const handleDelete = id => {
		setCartItems(prev => prev.filter(item => item.id !== id))
	}

	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	)

	const url = import.meta.env.VITE_API_URL

	const {data, loading, error} = useGetData(`${url}/carts`)

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

	console.log(data);
	

	const shipping = 16
	const total = subtotal + shipping

	return (
		<section className='max-w-[1211px] m-auto my-[50px] max-[1270px]:mx-[20px]'>
			<div className='flex flex-col lg:flex-row gap-8'>
				<div className='flex-1'>
					<h2 className='text-2xl font-bold mb-4'>Products</h2>
					{cartItems.map(item => (
						<div
							key={item.id}
							className='flex items-center justify-between border-b py-4'
						>
							<div className='flex items-center gap-4'>
								<img
									src={item.image}
									alt={item.title}
									className='w-20 h-20 object-cover'
								/>
								<div>
									<h3 className='font-semibold text-lg'>{item.title}</h3>
									<p className='text-gray-500 text-sm'>SKU: {item.sku}</p>
								</div>
							</div>
							<div className='flex items-center justify-between gap-16 w-2/3'>
								<span>${item.price.toFixed(2)}</span>
								<div className='flex items-center gap-2'>
									<button
										onClick={() => handleQuantity(item.id, 'dec')}
										className='bg-green-500 text-white p-1 rounded-full'
									>
										<Minus size={16} />
									</button>
									<span>{item.quantity}</span>
									<button
										onClick={() => handleQuantity(item.id, 'inc')}
										className='bg-green-500 text-white p-1 rounded-full'
									>
										<Plus size={16} />
									</button>
								</div>
								<span className='text-green-600 font-semibold'>
									${(item.price * item.quantity).toFixed(2)}
								</span>
								<Trash
									onClick={() => handleDelete(item.id)}
									className='cursor-pointer text-gray-500 hover:text-red-500'
								/>
							</div>
						</div>
					))}
				</div>

				<div className='border rounded-lg p-6 w-full max-w-sm'>
					<h2 className='text-xl font-bold mb-4'>Cart Totals</h2>
					<div className='mb-4'>
						<label className='block text-sm font-medium mb-1'>
							Coupon Apply
						</label>
						<div className='flex'>
							<input
								type='text'
								placeholder='Enter coupon code here...'
								className='border p-2 w-full rounded-l'
							/>
							<button className='bg-green-500 text-white px-4 rounded-r'>
								Apply
							</button>
						</div>
					</div>
					<div className='text-sm space-y-2 mb-4'>
						<div className='flex justify-between'>
							<span>Subtotal</span>
							<span>${subtotal.toFixed(2)}</span>
						</div>
						<div className='flex justify-between'>
							<span>Coupon Discount</span>
							<span>(-) 00.00</span>
						</div>
						<div className='flex justify-between'>
							<span>Shipping</span>
							<span>${shipping.toFixed(2)}</span>
						</div>
						<p className='text-green-500 text-sm cursor-pointer'>
							View shipping charge
						</p>
					</div>
					<div className='flex justify-between text-lg font-semibold mb-4'>
						<span>Total</span>
						<span className='text-green-600'>${total.toFixed(2)}</span>
					</div>
					<button className='w-full bg-green-600 text-white py-2 rounded mb-2'>
						Proceed To Checkout
					</button>
					<p className='text-center text-green-500 text-sm cursor-pointer'>
						Continue Shopping
					</p>
				</div>
			</div>
		</section>
	)
}

export default Add
