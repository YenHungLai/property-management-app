import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const getHouses = async () => {
	try {
		const res = await axios.get(`${BASE_URL}/houses`);
		console.log(res);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getHouse = async ({ id }) => {
	try {
		const res = await axios.get(`${BASE_URL}/houses/${id}`);
		console.log(res);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const addBooking = async ({ data }) => {
	try {
		const res = await axios.post(`${BASE_URL}/rooms/create`, data);
		console.log(res);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
