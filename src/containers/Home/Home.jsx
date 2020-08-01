import React, { useState, useEffect } from 'react';
// Modules
import axios from 'axios';
// Material UI
import { Container, Box } from '@material-ui/core';
// Components
import { MaterialTable } from 'components';
// Services
import { getHouses, getHouse } from 'services';
// Others
import styles from './Home.module.css';

const Home = () => {
	const [state, setState] = useState({ count: 0, data: [] });
	useEffect(() => {
		(async function () {
			const res = await getHouse({ id: 1 });
			setState(res);
		})();
	}, []);

	return (
		<Container className={styles.container}>
			{state.count && <MaterialTable data={state.data.Rooms} houseName={state.data.name} />}
		</Container>
	);
};

export default Home;
