import React, { useState } from 'react'
import {
	Dialog,
	DialogContent,
	Tabs,
	Tab,
	Box,
	Typography,
	TextField,
	Button,
	IconButton,
	Divider,
	useMediaQuery,
	useTheme,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import usePostHooks from '../../hooks/PostHooks'

const TabPanel = ({ children, value, index }) => {
	return (
		<div hidden={value !== index}>
			{value === index && <Box sx={{ mt: 2 }}>{children}</Box>}
		</div>
	)
}

const AuthModal = ({ open, handleClose }) => {
	const [tabValue, setTabValue] = useState(0)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
	const url = import.meta.env.VITE_API_URL

	const { response, error, loading, postData } = usePostHooks()

	const handleChange = (event, newValue) => {
		setTabValue(newValue)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		await postData(`${url}/auth/login`, {
			username,
			password,
		})
	}

	if (response) {
		console.log('✅ Login success:', response)
		localStorage.setItem('token', response?.accessToken)
		localStorage.setItem('userName', response?.firstName)
		handleClose()
	}
	if (error) {
		console.error('❌ Login error:', error.message)
	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth='xs'
			fullWidth
			fullScreen={fullScreen}
		>
			<DialogContent sx={{ position: 'relative', px: 4, pt: 3, pb: 5 }}>
				<IconButton
					onClick={handleClose}
					sx={{ position: 'absolute', top: 8, right: 8 }}
				>
					<CloseIcon />
				</IconButton>

				<Tabs
					value={tabValue}
					onChange={handleChange}
					variant='fullWidth'
					textColor='primary'
					indicatorColor='primary'
				>
					<Tab label='Login' />
					<Tab label='Register' />
				</Tabs>

				{/* Login panel */}
				<TabPanel value={tabValue} index={0}>
					<form onSubmit={handleSubmit}>
						<Typography sx={{ mt: 2, mb: 1 }}>
							Enter your username and password to login.
						</Typography>
						<TextField
							fullWidth
							margin='normal'
							label='Username'
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
						<TextField
							fullWidth
							margin='normal'
							label='Password'
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>

						<Typography
							variant='body2'
							align='right'
							sx={{ cursor: 'pointer', mb: 2, color: 'primary.main' }}
						>
							Forgot Password?
						</Typography>

						<Button
							onClick={handleSubmit}
							type='submit'
							fullWidth
							variant='contained'
							color='success'
							disabled={loading} 
						>
							{loading ? 'Loading...' : 'Login'}
						</Button>

						{error && (
							<Typography color='error' mt={2}>
								{error.message}
							</Typography>
						)}

						<Divider sx={{ my: 3 }}>Or login with</Divider>

						<Button
							fullWidth
							variant='outlined'
							startIcon={<GoogleIcon />}
							sx={{ mb: 1 }}
						>
							Login with Google
						</Button>
						<Button fullWidth variant='outlined' startIcon={<FacebookIcon />}>
							Login with Facebook
						</Button>
					</form>
				</TabPanel>

				{/* Register panel */}
				<TabPanel value={tabValue} index={1}>
					<TextField fullWidth margin='normal' label='Username' />
					<TextField fullWidth margin='normal' label='Email' />
					<TextField
						fullWidth
						margin='normal'
						label='Password'
						type='password'
					/>
					<Button fullWidth variant='contained' color='success' sx={{ mt: 2 }}>
						Register
					</Button>

					<Divider sx={{ my: 3 }}>Or register with</Divider>

					<Button
						fullWidth
						variant='outlined'
						startIcon={<GoogleIcon />}
						sx={{ mb: 1 }}
					>
						Register with Google
					</Button>
					<Button fullWidth variant='outlined' startIcon={<FacebookIcon />}>
						Register with Facebook
					</Button>
				</TabPanel>
			</DialogContent>
		</Dialog>
	)
}

export default AuthModal
