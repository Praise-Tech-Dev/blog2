import axios from "axios";

const url_base = 'https://fivic73350.pythonanywhere.com/users/'

const userLogin = async (payload) => {
    return await axios.post(`${url_base}login/`, payload)
}

export {
    userLogin,
}