import {  PROJECTS_SUCCESS  } from "./types";
import { getProjects, deleteProject, newProject, putProject } from "../services/projectServices"; 
import { simpleAlert, failureAlert } from "../utils/alerts";

 const projectSuccess = (data) => ({
    type : PROJECTS_SUCCESS,
    payload : data
})



export const requestProjects = () => dispatch => {   
    getProjects()
    .then(res => dispatch(projectSuccess(res.data.data)))
    .catch(err => failureAlert() )
};

export const deleteById = (id) => dispatch => {
    deleteProject(id)
    .then(res => {
        getProjects()
        .then(res =>dispatch(projectSuccess(res.data.data)) )
        .catch(err => failureAlert())
    })
    .catch(err => failureAlert())
}

export const createProject = (data) => dispatch => {
    newProject(data)
    .then(res => {
        simpleAlert('Proyecto creado!')
        getProjects()
        .then(res => dispatch(projectSuccess(res.data.data)))
        .catch(err => failureAlert() )
    })
    .catch(err => failureAlert() )
}


export const editProjectById = (id,data) =>{
    putProject(id,data)
    .then(res => {
        simpleAlert('sucess')
    })
    .catch(err => failureAlert() )
}

