import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Material UI
import { Container, Paper, Typography, Link } from '@material-ui/core';
// Components
import { Button, TextField } from 'components';
// Others
import styles from './Login.module.css';

const Login = () => {
	return (
		<Container className={styles.container}>
			<Paper className={styles.paper} elevation={3}>
				<form className={styles.form}>
					<Typography className={styles.title}>
						Property Management
					</Typography>
					<TextField label='Username' />
					<TextField label='Password' />
					<Button text='login' type='submit' />
					<Link component={RouterLink} to='#'>
						create an account
					</Link>
				</form>
			</Paper>
		</Container>
	);
};

export default Login;
