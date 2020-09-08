import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID c42b3cd42b4b1a42b9ab358b5e608b6b290e0d440b8530f52323b4b532f24f85'
    }
});
