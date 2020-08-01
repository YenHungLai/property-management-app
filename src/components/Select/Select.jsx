import React from 'react';
// Material UI
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
// Others
import styles from './Select.module.css';

const CustomSelect = ({ label, options = [], ...props }) => {
	return (
		<FormControl className={styles.formControl} variant='outlined'>
			<InputLabel id='select-label'>{label}</InputLabel>
			<Select
				classes={{ root: props.styles }}
				className={styles.select}
				labelId='select-label'
				label={label}
				{...props}
			>
				<MenuItem value=''>
					<em>None</em>
				</MenuItem>
				{options.map((option) => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default CustomSelect;
