import React from 'react';
// Material UI
import { Button } from '@material-ui/core';
// Others
import styles from './Button.module.css';

const CustomButton = ({ text, ...props }) => {
	return (
		<Button
			classes={{ root: props.styles }}
			className={styles.root}
			variant='contained'
			color='primary'
			{...props}
		>
			{text}
		</Button>
	);
};

export default CustomButton;
