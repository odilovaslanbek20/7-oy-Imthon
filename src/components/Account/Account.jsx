import { useState } from 'react'
import AddProducts from '../AddToCards/AddNewProducts'
import Checkout from './Checout'
import User from './User'

function Account() {
	const [page, setPage] = useState('account')

	return (
		<section className='max-w-[1211px] m-auto my-[50px] max-[1270px]:mx-[20px]'>
			<div className='flex items-start justify-center gap-[24px] max-[970px]:flex-col'>
				<div className='max-w-[300px] min-w-[300px] max-[1080px]:max-w-[250px] max-[1080px]:min-w-[250px] border border-gray-200 rounded-lg shadow-md p-4 max-[970px]:max-w-full max-[970px]:min-w-full max-[450px]:p-0 max-[450px]:border-none max-[450px]:shadow-none'>
					<div className='flex flex-col max-[970px]:flex-row gap-3 max-[416px]:flex-col max-[416px]:w-full'>
						<div
							onClick={() => setPage('account')}
							tabIndex={page === 'account' ? 0 : -1}
							className={`px-4 py-2 text-center max-[416px]:w-full rounded-md border ${page === 'account' ? 'border-blue-600 text-blue-700' : 'border-green-600 text-green-700'} font-medium cursor-pointer transition-all duration-200 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400`}
						>
							Account
						</div>
						<div
							onClick={() => setPage('checkout')}
							tabIndex={page === 'checkout' ? 0 : -1} 
							className={`px-4 py-2 text-center max-[416px]:w-full rounded-md border ${page === 'checkout' ? 'border-blue-600 text-blue-700' : 'border-green-600 text-green-700'} font-medium cursor-pointer transition-all duration-200 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400`}
						>
							Checkout
						</div>
						<div
							onClick={() => setPage('add')}
							tabIndex={page === 'add' ? 0 : -1}
							className={`px-4 py-2 text-center max-[416px]:w-full rounded-md border ${page === 'add' ? 'border-blue-600 text-blue-700' : 'border-green-600 text-green-700'} font-medium cursor-pointer transition-all duration-200 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400`}
						>
							Add New Cards
						</div>
					</div>
				</div>

				<div className='w-full'>
					{page === 'account' && <User />}
					{page === 'checkout' && <Checkout />}
					{page === 'add' && <AddProducts />}
				</div>
			</div>
		</section>
	)
}

export default Account
