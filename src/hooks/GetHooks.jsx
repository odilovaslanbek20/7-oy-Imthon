import { useEffect, useState } from 'react'

const useGetData = (url) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const res = await fetch(url)
				setData(res?.data)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)}
		}
		fetchData()
	}, [url]);

	return { data, loading, error }
}

export default useGetData