import { useState, useEffect } from 'react'
import useGetData from '../../hooks/GetHooks'

function User() {
	const [users, setUsers] = useState([])
	const url = import.meta.env.VITE_API_URL
	const { data, loading, error } = useGetData(`${url}/users?limit=1`)
	useEffect(() => {
		if (data) {
			setUsers(data?.users)
		}
	}, [data])

	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<div className='w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin'></div>
			</div>
		)
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	if (!data) {
		return <div>No data available</div>
	}

	return (
		<section className='max-w-[1200px] mx-auto'>
			<h2 className='text-3xl font-bold text-green-700 mb-6'>User List</h2>

			<div className='grid  gap-6'>
				{users.map(user => (
					<div
						key={user?.id}
						className='border border-green-500 rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow duration-200'
					>
						<div className='flex items-center gap-4 mb-4'>
							<img
								src={user?.image}
								alt={user?.firstName}
								className='w-16 h-16 rounded-full border border-green-400'
							/>
							<div>
								<h3 className='text-xl font-semibold text-green-700'>
									{user?.firstName} {user?.lastName}
								</h3>
								<a href={`mailto:${user?.email}`} className='text-sm text-gray-600'>{user?.email}</a>
								<a href={`tel:${user?.phone}`} className='text-sm text-gray-600'>{user?.phone}</a>
							</div>
						</div>

						<div className='text-sm text-gray-800 space-y-1'>
							<p>
								<span className='font-medium text-green-600'>Username:</span>{' '}
								{user?.username}
							</p>
							<p>
								<span className='font-medium text-green-600'>Birth Date:</span>{' '}
								{user?.birthDate}
							</p>
							<p>
								<span className='font-medium text-green-600'>Gender:</span>{' '}
								{user?.gender}
							</p>
							<p>
								<span className='font-medium text-green-600'>Blood Group:</span>{' '}
								{user?.bloodGroup}
							</p>
							<p>
								<span className='font-medium text-green-600'>Address:</span>{' '}
								{user?.address.address}, {user?.address?.city},{' '}
								{user?.address.state}, {user?.address?.country} -{' '}
								{user?.address.postalCode}
							</p>
							<p>
								<span className='font-medium text-green-600'>Company:</span>{' '}
								{user?.company?.name} - {user?.company?.title}
							</p>
							<p>
								<span className='font-medium text-green-600'>University:</span>{' '}
								{user?.university}
							</p>
							<p>
								<span className='font-medium text-green-600'>Bank Card:</span>{' '}
								{user?.bank?.cardNumber} ({user?.bank?.cardType}, expires{' '}
								{user?.bank?.cardExpire})
							</p>
							<p>
								<span className='font-medium text-green-600'>IBAN:</span>{' '}
								{user?.bank?.iban}
							</p>
							<p>
								<span className='font-medium text-green-600'>Crypto:</span>{' '}
								{user?.crypto?.coin} on {user?.crypto?.network}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default User
