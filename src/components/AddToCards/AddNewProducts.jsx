import { useEffect, useState } from 'react'
import usePostHooks from '../../hooks/PostHooks'

function AddProducts() {

	const [notification, setNotification] = useState(false)
	const [errorMessages, setErrorMessages] = useState({})
	const url = import.meta.env.VITE_API_URL
	const { response, error, loading, postData } = usePostHooks()

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		price: '',
		image: '',
		brand: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		let errors = {}
		if (!formData.title) errors.title = 'Nomi bo\'sh bo\'lmasligi kerak'
		if (!formData.description) errors.description = 'Tavsif bo\'sh bo\'lmasligi kerak'
		if (!formData.price) errors.price = 'Narxni kiriting'
		if (!formData.image) errors.image = 'Rasm URL manzili kiriting'
		if (!formData.brand) errors.brand = 'Brendni kiriting'

		if (Object.keys(errors).length > 0) {
			setErrorMessages(errors)
			return
		}

		const preparedData = {
			...formData,
			description: formData.description || 'No description',
			tags: ['default', 'product'],
			discountPercentage: 0,
			stock: 100,
			category: 'general',
			availabilityStatus: 'In Stock',
			minimumOrderQuantity: 1,
			sku: 'DEFAULT-SKU',
			weight: 100,
			warrantyInformation: '1 year warranty',
			shippingInformation: 'Ships within 3 days',
			returnPolicy: '7-day return policy',
			images: [formData.image],
			qrCode: '',
			barcode: '0000000000000',
			rating: 4.5,
			dimensions: {
				width: 10,
				height: 10,
				depth: 5,
			},
			meta: {
				barcode: '0000000000000',
				qrCode: '',
			},
			price: parseFloat(formData.price),
		}

		await postData(`${url}/products/add`, preparedData)
	}

	useEffect(() => {
		if (response) {
			setNotification(true)
			const timer = setTimeout(() => setNotification(false), 2000)
			return () => clearTimeout(timer)
		}
	}, [response])

	return (
		<>
			{notification && (
				<div
					className={`fixed z-50 top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md shadow-lg flex items-center justify-between bg-green-500 min-w-[300px] max-w-md`}
				>
					<span className='text-sm text-[#fff] font-medium'>
						✅ Yangi maxsulot muvafaqiyapli qo'shildi...
					</span>
					<button
						onClick={() => setNotification(false)}
						className='ml-4 text-white cursor-pointer text-lg leading-none focus:outline-none hover:text-gray-200'
					>
						x
					</button>
				</div>
			)}
			<section className='max-w-[1211px] m-auto'>
				<form
					onSubmit={handleSubmit}
					className='space-y-4 p-6 max-[450px]:p-3 bg-white  rounded-xl shadow border border-green-300'
				>
					<h2 className='text-2xl font-bold text-green-600'>
						Mahsulot ma'lumotlari
					</h2>

					<input
						type='text'
						name='title'
						placeholder='Nomi'
						onChange={handleChange}
						className='w-full p-2 border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
					/>
					{errorMessages.title && (
						<p className='text-red-600 text-sm'>{errorMessages.title}</p>
					)}

					<textarea
						name='description'
						placeholder='Tavsif'
						onChange={handleChange}
						className='w-full p-2 border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
					></textarea>
					{errorMessages.description && (
						<p className='text-red-600 text-sm'>{errorMessages.description}</p>
					)}

					<input
						type='number'
						step='0.01'
						name='price'
						placeholder='Narx ($)'
						onChange={handleChange}
						className='w-full p-2 border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
					/>
					{errorMessages.price && (
						<p className='text-red-600 text-sm'>{errorMessages.price}</p>
					)}

					<input
						type='url'
						name='image'
						placeholder='Rasm URL'
						onChange={handleChange}
						className='w-full p-2 border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
					/>
					{errorMessages.image && (
						<p className='text-red-600 text-sm'>{errorMessages.image}</p>
					)}

					<input
						type='text'
						name='brand'
						placeholder='Brend'
						onChange={handleChange}
						className='w-full p-2 border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
					/>
					{errorMessages.brand && (
						<p className='text-red-600 text-sm'>{errorMessages.brand}</p>
					)}

					<button
						disabled={loading}
						type='submit'
						className='w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition'
					>
						{loading ? 'Yuklanmoqda...' : 'Yuborish'}
					</button>

					{error && <p className='text-red-600'>Xatolik: {error.message}</p>}
				</form>
			</section>
		</>
	)
}

export default AddProducts
