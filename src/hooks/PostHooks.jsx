import { useState } from 'react'
import axios from 'axios'

function usePostHooks() {
	const [response, setResponse] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const postData = async (url, data) => {
		setLoading(true)
		try {
			const res = await axios.post(url, data)
			setResponse(res.data)
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}

	return { response, error, loading, postData }
}

export default usePostHooks
