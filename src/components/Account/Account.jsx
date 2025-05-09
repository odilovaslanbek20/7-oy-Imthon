import { useState } from 'react'
import AddProducts from '../AddToCards/AddNewProducts'
import Checkout from './Checout'
import User from './User'

function Account() {
	const [page, setPage] = useState('account')

	return (
		<section className='max-w-[1211px] m-auto my-[50px] max-[1270px]:mx-[20px]'>
			<div className='flex items-start justify-center gap-[50px]'>
				<div className='max-w-[300px] min-w-[300px] border border-gray-200 rounded-lg shadow-md p-4'>
					<div className='flex flex-col gap-3'>
						<div
							onClick={() => setPage('account')}
							tabIndex={0}
							className='px-4 py-2 text-center rounded-md border border-green-600 text-green-700 font-medium cursor-pointer transition-all duration-200 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400'
						>
							Account
						</div>
						<div
							onClick={() => setPage('checkout')}
							tabIndex={0}
							className='px-4 py-2 text-center rounded-md border border-green-600 text-green-700 font-medium cursor-pointer transition-all duration-200 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400'
						>
							Checkout
						</div>
						<div
							onClick={() => setPage('add')}
							tabIndex={0}
							className='px-4 py-2 text-center rounded-md border border-green-600 text-green-700 font-medium cursor-pointer transition-all duration-200 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400'
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
