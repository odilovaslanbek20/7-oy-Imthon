import { useState, useEffect } from 'react'
import useGetData from '../../hooks/GetHooks'
import { Link } from 'react-router-dom'

const Add = () => {
	const url = import.meta.env.VITE_API_URL
	const { data, loading, error } = useGetData(`${url}/carts?limit=1`)

	if (data) {
		localStorage.setItem('cart', JSON.stringify(data?.carts))
	}

	const [quantities, setQuantities] = useState({})

	useEffect(() => {
		if (data?.carts?.length) {
			const initialQuantities = {}
			data.carts[0].products.forEach(product => {
				initialQuantities[product.id] = product.quantity
			})
			setQuantities(initialQuantities)
		}
	}, [data])

	const handleQuantityChange = (productId, change) => {
		setQuantities(prev => {
			const newQty = Math.max(1, (prev[productId] || 1) + change)
			return { ...prev, [productId]: newQty }
		})
	}

	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<div className='w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin'></div>
			</div>
		)
	}

	const calculateTotal = products => {
		return products.reduce((sum, product) => {
			const quantity = quantities[product.id] || product.quantity
			return sum + product.price * quantity
		}, 0)
	}

	const calculateTotalQuantity = products => {
		return products.reduce((sum, product) => {
			return sum + (quantities[product.id] || product.quantity)
		}, 0)
	}

	const calculateDiscountedTotal = (
		products,
		total,
		cartDiscountedTotal,
		cartTotal
	) => {
		const discountRate = 1 - cartDiscountedTotal / cartTotal
		return total - total * discountRate
	}

	if (error) {
		return (
			<div className='flex items-center justify-center h-screen px-4'>
				<div className='bg-red-100 border border-red-300 text-red-800 p-6 rounded-lg shadow-md w-full max-w-md text-center'>
					<h2 className='text-xl font-semibold mb-2'>Xatolik!</h2>
					<p>{error.message}</p>
				</div>
			</div>
		)
	}

	return (
		<section className='max-w-[1211px] m-auto my-[50px] max-[550px]:my-[30px] max-[1270px]:mx-[20px]'>
			<h1 className='text-2xl max-[768px]:text-center font-bold text-[#46A358] mb-6'>
				Savatchadagi mahsulotlar
			</h1>
			{data?.carts?.map(cart => {
				const total = calculateTotal(cart.products)
				const totalQuantity = calculateTotalQuantity(cart.products)
				const discountedTotal = calculateDiscountedTotal(
					cart.products,
					total,
					cart.discountedTotal,
					cart.total
				)

				return (
					<div
						key={cart.id}
						className='mb-10 max-[500px]:bg-transparent max-[500px]:px-[0px] max-[500px]:shadow-none bg-green-50 p-5 rounded-lg shadow'
					>
						{cart.products.map(product => (
							<div
								key={product?.id}
								className='bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row items-center gap-4 mb-4'
							>
								<img
									src={product?.thumbnail}
									alt={product?.title}
									className='w-20 h-20 object-cover rounded'
								/>
								<div className='flex-1 text-left'>
									<h3 className='text-lg font-semibold max-[500px]:text-center text-[#3D3D3D]'>
										{product?.title}
									</h3>
									<p className='text-sm text-gray-500 max-[500px]:text-center '>
										Narxi: ${product?.price}
									</p>
								</div>

								<div className='flex items-center gap-4'>
									<div className='flex items-center overflow-hidden'>
										<button
											onClick={() => handleQuantityChange(product?.id, -1)}
											className='px-[10px] py-[3px] bg-[#46A358] rounded-full text-white hover:bg-green-600'
										>
											−
										</button>
										<span className='px-3 py-1'>
											{quantities[product?.id] || product?.quantity}
										</span>
										<button
											onClick={() => handleQuantityChange(product?.id, 1)}
											className='px-[10px] py-[3px] bg-[#46A358] rounded-full text-white hover:bg-green-600'
										>
											+
										</button>
									</div>
									<span className='text-lg font-bold text-[#46A358]'>
										$
										{(
											product?.price *
											(quantities[product?.id] || product?.quantity)
										).toFixed(2)}
									</span>
								</div>
							</div>
						))}

						<div className='bg-white p-5 rounded-lg border-t-4 border-[#46A358]'>
							<div className='flex justify-between items-center mb-2 text-gray-700'>
								<span>Jami narx:</span>
								<span>${total.toFixed(2)}</span>
							</div>
							<div className='flex justify-between items-center mb-2 text-gray-700'>
								<span>Chegirma:</span>
								<span className='text-red-500'>
									-${(total - discountedTotal).toFixed(2)}
								</span>
							</div>
							<div className='flex justify-between items-center mb-2 text-gray-700'>
								<span>Mahsulot soni:</span>
								<span>{totalQuantity} dona</span>
							</div>
							<div className='flex justify-between items-center text-lg font-bold text-[#46A358]'>
								<span>Umumiy summa:</span>
								<span>${discountedTotal.toFixed(2)}</span>
							</div>
							<Link
								to='/account'
							>
								<p className='w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-center'>To'lovga o'tish...</p>
							</Link>
						</div>
					</div>
				)
			})}
		</section>
	)
}

export default Add
