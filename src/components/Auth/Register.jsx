// import React, { useState } from 'react'
// import {
// 	Dialog,
// 	DialogContent,
// 	Tabs,
// 	Tab,
// 	Box,
// 	Typography,
// 	TextField,
// 	Button,
// 	IconButton,
// 	Divider,
// 	useMediaQuery,
// 	useTheme,
// } from '@mui/material'
// import CloseIcon from '@mui/icons-material/Close'
// import GoogleIcon from '@mui/icons-material/Google'
// import FacebookIcon from '@mui/icons-material/Facebook'
// import usePostHooks from '../../hooks/PostHooks'

// const TabPanel = ({ children, value, index }) => {
// 	return (
// 		<div hidden={value !== index}>
// 			{value === index && <Box sx={{ mt: 2 }}>{children}</Box>}
// 		</div>
// 	)
// }

// const AuthModal = ({ open, handleClose }) => {
// 	const [tabValue, setTabValue] = useState(0)
// 	// const [username, setEmail] = useState('emilys')
// 	// const [password, setPassword] = useState('emilyspass')
// 	const theme = useTheme()
// 	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
//   // const url = import.meta.env.VITE_API_URL

// 	const handleChange = (event, newValue) => {
// 		setTabValue(newValue)
// 	}

//   // const formData = {
//   //   username,
//   //   password,
//   // }
//   // const {data, loading, error} = usePostHooks(`${url}/auth/login/${formData}`)
//   // if (loading) {
//   //   return (
//   //     <div className='flex items-center justify-center h-screen'>
//   //       <div className='w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin'></div>
//   //     </div>
//   //   )
//   // }
//   // if (error) {
//   //   return (
//   //     <div className='flex items-center justify-center h-screen px-4'>
//   //       <div className='bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg shadow-md w-full max-w-md text-center'>
//   //         <h2 className='text-xl font-semibold mb-2'>Xatolik!</h2>
//   //         <p>{error.message}</p>
//   //       </div>
//   //     </div>
//   //   )
//   // }

//   // console.log(data);


// 	return (
// 		<Dialog
// 			open={open}
// 			onClose={handleClose}
// 			maxWidth='xs'
// 			fullWidth
// 			fullScreen={fullScreen}
// 		>
// 			<DialogContent sx={{ position: 'relative', px: 4, pt: 3, pb: 5 }}>
// 				<IconButton
// 					onClick={handleClose}
// 					sx={{ position: 'absolute', top: 8, right: 8 }}
// 				>
// 					<CloseIcon />
// 				</IconButton>

// 				<Tabs
// 					value={tabValue}
// 					onChange={handleChange}
// 					variant='fullWidth'
// 					textColor='primary'
// 					indicatorColor='primary'
// 				>
// 					<Tab label='Login' />
// 					<Tab label='Register' />
// 				</Tabs>

// 				{/* Login panel */}
// 				<TabPanel value={tabValue} index={0}>
// 					<form>
// 						<Typography sx={{ mt: 2, mb: 1 }}>
// 							Enter your username and password to login.
// 						</Typography>
// 						<TextField
// 							fullWidth
// 							margin='normal'
// 							label='text'
// 							onChange={e => setEmail(e.target.value)}
// 						/>
// 						<TextField
// 							fullWidth
// 							margin='normal'
// 							label='Password'
// 							type='password'
// 							onChange={e => setPassword(e.target.value)}
// 						/>
// 						<Typography
// 							variant='body2'
// 							align='right'
// 							sx={{ cursor: 'pointer', mb: 2, color: 'primary.main' }}
// 						>
// 							Forgot Password?
// 						</Typography>
// 						<Button type='submit' fullWidth variant='contained' color='success'>
// 							Login
// 						</Button>

// 						<Divider sx={{ my: 3 }}>Or login with</Divider>

// 						<Button
// 							fullWidth
// 							variant='outlined'
// 							startIcon={<GoogleIcon />}
// 							sx={{ mb: 1 }}
// 						>
// 							Login with Google
// 						</Button>
// 						<Button fullWidth variant='outlined' startIcon={<FacebookIcon />}>
// 							Login with Facebook
// 						</Button>
// 					</form>
// 				</TabPanel>

// 				{/* Register panel */}
// 				<TabPanel value={tabValue} index={1}>
// 					<TextField fullWidth margin='normal' label='Username' />
// 					<TextField fullWidth margin='normal' label='Email' />
// 					<TextField
// 						fullWidth
// 						margin='normal'
// 						label='Password'
// 						type='password'
// 					/>
// 					<Button fullWidth variant='contained' color='success' sx={{ mt: 2 }}>
// 						Register
// 					</Button>

// 					<Divider sx={{ my: 3 }}>Or register with</Divider>

// 					<Button
// 						fullWidth
// 						variant='outlined'
// 						startIcon={<GoogleIcon />}
// 						sx={{ mb: 1 }}
// 					>
// 						Register with Google
// 					</Button>
// 					<Button fullWidth variant='outlined' startIcon={<FacebookIcon />}>
// 						Register with Facebook
// 					</Button>
// 				</TabPanel>
// 			</DialogContent>
// 		</Dialog>
// 	)
// }

// export default AuthModal
