import axios from "axios";
const baseURL = process.env.REACT_APP_API

export const getProjects = () => {
    return axios.get(`${baseURL}`)
}

export const newProject = (data) => {
    return axios.post(`${baseURL}`,data)
}

export const getById = (id) => {
    return axios.get(`${baseURL}/${id}`)
}

export const deleteProject = (id) => {
    return axios.delete(`${baseURL}/${id}`)
} 

export const putProject = (id,data) => {
    return axios.put(`${baseURL}/${id}` , data)
}