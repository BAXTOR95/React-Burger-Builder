import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-32ebb-default-rtdb.firebaseio.com/'
});

export default instance;