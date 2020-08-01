import React from 'react';
// Material UI
import MaterialTable from 'material-table';
// Modules
import dayjs from 'dayjs';
// Components
import { TextField } from 'components';
// Services
import { addBooking } from 'services';
// Others
import Icons from './Icons';

export default ({ data, houseName, ...props }) => {
	const [state, setState] = React.useState({
		columns: [
			{ title: 'House', field: 'houseName' },
			{ title: 'Room', field: 'roomNumber' },
			{ title: 'Occupant', field: 'occupant' },
			{
				title: 'Check In',
				field: 'checkIn',
				editComponent: (props) => (
					<TextField
						type='date'
						value={dayjs(props.value).format('YYYY-MM-DD')}
						onChange={(e) => props.onChange(e.target.value)}
					/>
				),
			},
			{
				title: 'Check Out',
				field: 'checkOut',
				editComponent: (props) => (
					<TextField
						type='date'
						defaultValue={dayjs(props.value).format('YYYY-MM-DD')}
						onChange={(e) => props.onChange(e.target.value)}
					/>
				),
			},
		],
		data: data.map((entry) => ({
			...entry,
			houseName,
			checkIn: dayjs(entry.checkIn).format('MM/DD/YYYY'),
			checkOut: dayjs(entry.checkOut).format('MM/DD/YYYY'),
		})),
	});

	return (
		<MaterialTable
			title='Bookings'
			columns={state.columns}
			data={state.data}
			icons={Icons}
			editable={{
				onRowAdd: (newData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve();
							setState((prevState) => {
								const data = [...prevState.data];
								data.push(newData);
								return { ...prevState, data };
							});
						}, 600);
					}),
				onRowUpdate: (newData, oldData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve();
							if (oldData) {
								setState((prevState) => {
									const data = [...prevState.data];
									data[data.indexOf(oldData)] = newData;
									return { ...prevState, data };
								});
							}
						}, 600);
					}),
				onRowDelete: (oldData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve();
							setState((prevState) => {
								const data = [...prevState.data];
								data.splice(data.indexOf(oldData), 1);
								return { ...prevState, data };
							});
						}, 600);
					}),
			}}
		/>
	);
};
