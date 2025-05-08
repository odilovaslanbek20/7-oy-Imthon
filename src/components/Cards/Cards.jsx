import { Link } from 'react-router-dom'
import { GoHeart } from 'react-icons/go'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'
import { FcLike } from 'react-icons/fc'
import useGetData from '../../hooks/GetHooks'
import { useState } from 'react'
import usePostHooks from '../../hooks/PostHooks'

function Cards() {
	const [like, setLike] = useState(false)
	const [modal, setModal] = useState(false)
	const [value, setValue] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('')

	const url = import.meta.env.VITE_API_URL

	const { data, loading, error } = useGetData(`${url}/products?limit=194`)
	const {
		data: categories,
		loading: loading1,
		error: error1,
	} = useGetData(`${url}/products/category-list`)

	const cards = data?.products || []

	const formData = {
		userId: 1,
		products: [
			{
				id: Math.floor(Math.random() * 100),
				quantity: Math.floor(Math.random() * 5) + 1,
			},
			{
				id: Math.floor(Math.random() * 100),
				quantity: Math.floor(Math.random() * 5) + 1,
			},
		],
	}

	const {
		response,
		error: error2,
		postData,
		loading: loading2,
	} = usePostHooks()

	const handleClick = (id, quantity) => {
		console.log(id,    quantity);
		
		postData(`${url}/carts/add`, formData)
	}

	console.log(response)

	if (loading || loading1) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<div className='w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin'></div>
			</div>
		)
	}
	if (error || error1 || error2) {
		return (
			<div className='flex items-center justify-center h-screen px-4'>
				<div className='bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg shadow-md w-full max-w-md text-center'>
					<h2 className='text-xl font-semibold mb-2'>Xatolik!</h2>
					<p>{error.message || error1.message}</p>
				</div>
			</div>
		)
	}

	const filteredCards = cards?.filter(card => {
		const search = card?.title?.toLowerCase().includes(value.toLowerCase())
		const category = selectedCategory
			? card?.category?.toLowerCase().includes(selectedCategory.toLowerCase())
			: true
		return search && category
	})

	return (
		<section className='max-w-[1211px] m-auto my-[50px] max-[1270px]:mx-[20px]'>
			<div className='flex items-start gap-[20px] max-[850px]:flex-col'>
				<div className='flex items-center justify-between gap-3 w-full min-[850px]:hidden'>
					<p className='text-lg font-semibold'>Categories</p>
					<FaBars
						onClick={() => setModal(true)}
						className='text-[25px] cursor-pointer hover:text-[#46A358] transition'
					/>
				</div>

				<div className='hidden min-[851px]:block min-w-[310px] max-w-[310px] px-[18px] py-[18px] shadow-md bg-white rounded-md'>
					<h2 className='text-[20px] font-bold text-[#3D3D3D] mb-4 border-b pb-2'>
						Categories
					</h2>
					<div className='space-y-3'>
						<button
							onClick={() => setSelectedCategory('')}
							className={`group block font-medium cursor-pointer transition-all ${
								selectedCategory === ''
									? 'text-[#46A358] font-semibold'
									: 'text-[#3D3D3D]'
							}`}
						>
							<span
								onClick={() => setModal(false)}
								className='relative w-fit inline-block'
							>
								All
								<span
									className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transition-transform duration-300 ${
										selectedCategory === ''
											? 'scale-x-100 bg-[#46A358]'
											: 'scale-x-0'
									}`}
								></span>
							</span>
						</button>

						{categories?.map((category, i) => (
							<div key={i}>
								<button
									onClick={() => {
										setSelectedCategory(category)
										setModal(false)
									}}
									className={`group block font-medium cursor-pointer transition-all ${
										selectedCategory === category
											? 'text-[#46A358] font-semibold'
											: 'text-[#3D3D3D]'
									}`}
								>
									<span className='relative w-fit inline-block'>
										{category}
										<span
											className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transition-transform duration-300 ${
												selectedCategory === category
													? 'scale-x-100 bg-[#46A358]'
													: 'scale-x-0'
											}`}
										></span>
									</span>
								</button>
							</div>
						))}
					</div>
				</div>

				<div
					className={`fixed top-0 left-0 h-full w-[320px] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out 
	max-[850px]:w-[85%] max-[400px]:w-full max-[850px]:block hidden
	${modal ? 'translate-x-0' : '-translate-x-full'}`}
				>
					<div className='relative px-5 py-6 h-full overflow-y-auto'>
						<FaXmark
							onClick={() => setModal(false)}
							className='text-[25px] absolute top-[15px] right-[15px] cursor-pointer text-gray-700 hover:text-red-500 transition'
						/>
						<h2 className='text-[20px] font-bold text-[#3D3D3D] mb-4 border-b pb-2'>
							Categories
						</h2>
						<div className='space-y-3'>
							<button
								onClick={() => setSelectedCategory('')}
								className={`group block font-medium cursor-pointer transition-all ${
									selectedCategory === ''
										? 'text-[#46A358] font-semibold'
										: 'text-[#3D3D3D]'
								}`}
							>
								<span
									onClick={() => setModal(false)}
									className='relative w-fit inline-block hover:text-[#46A358] transition'
								>
									All
									<span
										className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transition-transform duration-300 ${
											selectedCategory === ''
												? 'scale-x-100 bg-[#46A358]'
												: 'scale-x-0'
										}`}
									></span>
								</span>
							</button>
							{categories?.map((category, i) => (
								<div className='group relative w-fit' key={i}>
									<button
										onClick={() => {
											setSelectedCategory(category)
											setModal(false)
										}}
										className={`relative text-[#3D3D3D] font-medium transition-all 
        ${selectedCategory === category ? 'text-[#46A358] font-semibold' : ''} 
        hover:text-[#46A358] focus:text-[#46A358] hover:font-semibold focus:font-semibold
        outline-none`}
									>
										<span className='relative inline-block'>
											{category}
											<span
												className={`absolute left-0 -bottom-1 h-[2px] inline-block origin-left transition-transform duration-300
            ${
							selectedCategory === category
								? 'scale-x-100 bg-[#46A358] w-full'
								: 'scale-x-0 bg-[#46A358] w-full'
						}`}
											></span>
										</span>
									</button>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='w-full'>
					<div className='mb-5'>
						<form className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus-within:border-[#46A358] transition-all'>
							<FiSearch className='text-gray-500 text-xl' />
							<input
								type='text'
								onChange={e => setValue(e.target.value)}
								placeholder='Search data...'
								className='outline-none flex-1 text-sm text-gray-700 placeholder-gray-400'
							/>
						</form>
					</div>
					<div className='grid grid-cols-3 max-[500px]:grid-cols-1 max-[1070px]:grid-cols-2 gap-6'>
						{filteredCards?.map((card) => (
							<div
								key={card.id}
								className='relative bg-white  shadow-md rounded-xl overflow-hidden transition hover:shadow-lg'
							>
								<div className='absolute top-3 right-3 flex gap-3 text-gray-600'>
									<button
										onClick={() => setLike(true)}
										className='hover:text-red-500 cursor-pointer transition w-[40px] h-[40px] border rounded flex items-center justify-center bg-[#fff]'
									>
										{like ? <FcLike size={20} /> : <GoHeart size={20} />}
									</button>
									<button
										onClick={() =>
											handleClick(card?.id, card?.products)
										}
										className='hover:text-green-600 transition w-[40px] h-[40px] border rounded flex items-center justify-center cursor-pointer bg-[#fff]'
									>
											<AiOutlineShoppingCart size={20} />
									</button>
								</div>

								<img
									src={card?.images[0]}
									alt={card?.title}
									className='w-full h-[200px] object-cover'
								/>

								<div className='p-4 flex flex-col gap-2'>
									<h3 className='text-lg font-semibold text-gray-800 leading-[120%]'>
										{card?.title}
									</h3>
									<p className='text-base text-gray-600'>${card?.price}</p>
									<Link
										to={`${card?.id}`}
										className='mt-2 inline-block bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-500 transition'
									>
										Lean more
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Cards
