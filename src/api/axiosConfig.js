import axios from 'axios';

export default axios.create({
    baseURL: 'http://129.151.211.224/',
    // baseURL: 'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});