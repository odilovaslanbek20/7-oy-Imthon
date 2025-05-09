import React from 'react'

function Checkout() {
	const order = JSON.parse(localStorage.getItem('cart'))
	if (!order) {
		return <div>No items in the cart.</div>
	}

	return (
		<div className='flex max-w-6xl mx-auto gap-[24px] max-[800px]:flex-col'>
			<div className='bg-white p-6 max-[450px]:p-0 max-[450px]:shadow-none rounded-lg shadow-md w-full'>
				<h2 className='text-xl font-semibold mb-4'>Billing Address</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<label className='block font-semibold'>First Name *</label>
						<input type='text' className='w-full mt-1 p-2 border rounded' />
					</div>
					<div>
						<label className='block font-semibold'>Last Name *</label>
						<input type='text' className='w-full mt-1 p-2 border rounded' />
					</div>
				</div>

				<div className='mt-4'>
					<label className='block font-semibold'>Country / Region *</label>
					<select className='w-full mt-1 p-2 border rounded'>
						<option>Select a country / region</option>
					</select>
				</div>

				<div className='mt-4'>
					<label className='block font-semibold'>Town / City *</label>
					<input type='text' className='w-full mt-1 p-2 border rounded' />
				</div>

				<div className='mt-4'>
					<label className='block font-semibold'>Street Address *</label>
					<input
						type='text'
						className='w-full mt-1 p-2 border rounded'
						placeholder='House number and street name'
					/>
					<input
						type='text'
						className='w-full mt-2 p-2 border rounded'
						placeholder='Apartment, suite, unit, etc. (optional)'
					/>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
					<div>
						<label className='block font-semibold'>State *</label>
						<select className='w-full mt-1 p-2 border rounded'>
							<option>Select a state</option>
						</select>
					</div>
					<div>
						<label className='block font-semibold'>Zip *</label>
						<input type='text' className='w-full mt-1 p-2 border rounded' />
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
					<div>
						<label className='block font-semibold'>Email address *</label>
						<input type='email' className='w-full mt-1 p-2 border rounded' />
					</div>
					<div>
						<label className='block font-semibold'>Phone Number *</label>
						<input
							type='tel'
							className='w-full mt-1 p-2 border rounded'
							placeholder='+966'
						/>
					</div>
				</div>

				<div className='mt-4'>
					<label className='inline-flex items-center'>
						<input type='checkbox' className='mr-2' /> Ship to a different
						address?
					</label>
				</div>

				<div className='mt-4'>
					<label className='block font-semibold'>Order notes (optional)</label>
					<textarea
						className='w-full mt-1 p-2 border rounded'
						rows='3'
					></textarea>
				</div>
			</div>

			<hr className='min-[450px]:hidden' />

			<div className='bg-white p-6 max-[450px]:p-0 max-[450px]:shadow-none rounded-lg shadow-md '>
				<h2 className='text-xl font-semibold mb-4'>Your Order</h2>
				<div className='divide-y'>
					{order[0]?.products?.map(product => (
						<div key={product.id} className='flex items-start gap-[20px] justify-between py-2'>
							 <img className='w-[70px] h-[70px] bg-contain' src={product?.thumbnail} alt={product?.title} />
							<div className=''>
								<span>{`${product?.title} (x${product?.quantity})`}</span>
								<span className='font-semibold'>
									${product.total.toFixed(2)}
								</span>
							</div>
						</div>
					))}
				</div>

				<div className='mt-4'>
					<div className='flex justify-between'>
						<span>Subtotal</span>
						<span>${order?.discountedTotal?.toFixed(2)}</span>
					</div>
					<div className='flex justify-between'>
						<span>Coupon Discount</span>
						<span>$0.00</span>
					</div>
					<div className='flex justify-between'>
						<span>Shipping</span>
						<span>$16.00</span>{' '}
					</div>
					<div className='flex justify-between font-semibold border-t mt-2 pt-2'>
						<span>Total</span>
						<span>${order?.total?.toFixed(2)}</span>
					</div>
				</div>

				<div className='mt-6'>
					<h3 className='font-semibold'>Payment Method</h3>
					<label className='block mt-2'>
						<input type='radio' name='payment' className='mr-2' /> PayPal /
						MasterCard / Visa / AmEx
					</label>
					<label className='block mt-2'>
						<input type='radio' name='payment' className='mr-2' /> Direct bank
						transfer
					</label>
					<label className='block mt-2'>
						<input
							type='radio'
							name='payment'
							className='mr-2'
							defaultChecked
						/>{' '}
						Cash on delivery
					</label>
				</div>

				<button className='bg-green-600 text-white w-full mt-6 py-3 rounded-md hover:bg-green-700'>
					Place Order
				</button>
			</div>
		</div>
	)
}

export default Checkout
