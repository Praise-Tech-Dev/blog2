import axios from 'axios';

const url_base = 'https://fivic73350.pythonanywhere.com/blogs/'
// const url_base ='https://sonisoh347.pythonanywhere.com/blogs/'

const getAllBlog = async () => {
    return await axios.get(url_base)
}

const getSingleBlog = async (id) => {
    return await axios.get(`${url_base}${id}`)
}

const addNewBlog = async (payload) => {
    return await axios.post(`${url_base}`, payload)
}

const editBlog = async (payload, id) => {
    return await axios.put(`${url_base}/${id}/`, payload)
}

const deleteBlog = async (id) => {
    return await axios.delete(`${url_base}/${id}/`)
}

export {
    getAllBlog,
    getSingleBlog,
    addNewBlog,
    editBlog,
    deleteBlog
}   