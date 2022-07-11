import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

// export class Http  {
//     static get = (endPoint) =>{
//         return axios.get(BASE_URL + endPoint)
//     }
// }

export const get = (endPoint) => axios.get(BASE_URL + endPoint)