import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-8c749.firebaseio.com/'
});

export default instance;