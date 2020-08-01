import React from 'react';
// Material UI
import { TextField } from '@material-ui/core';
// Others
import styles from './TextField.module.css';

const CustomTextField = ({ ...props }) => {
	if (props.type === 'date')
		return (
			<TextField
				classes={{ root: props.styles }}
				className={styles.root}
				variant='standard'
				InputLabelProps={{
					shrink: true,
				}}
				{...props}
			/>
		);

	return (
		<TextField
			classes={{ root: props.styles }}
			className={styles.root}
			variant='outlined'
			{...props}
		/>
	);
};

export default CustomTextField;
