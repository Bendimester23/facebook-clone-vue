import Axios from 'axios';

import API_URL from './feed';

let token = '';
let username = '';

export default {
    token: token,
    username: username
};

export async function login(name:String, password: String) {
    const resp = await Axios.post(API_URL+'/api/auth/login', {
        username: username,
        password: password
    });

    console.log(resp.data);
}