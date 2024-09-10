import axios from "axios";
const token = localStorage.getItem('stu-login')

const instance = axios.create({
    baseURL: 'https://student-api.acpt.lk/api',
    headers: {Authorization: `Bearer ${token}`}
});

export default instance;
