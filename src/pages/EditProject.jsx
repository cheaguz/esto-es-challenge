import React from 'react'

import { SubHeader } from '../components/styled/StyledIndex';
import { Form } from '../components/Form';

import { useParams} from 'react-router-dom';
import { editProjectById } from '../redux/projectActions' 
import { BackButton } from '../components/BackButton';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';



export const EditProject = () => {
   
   const dispatch = useDispatch();
   const { id } = useParams();

   const Data = localStorage.getItem('data')
   const parsedData = JSON.parse(Data)

   const initialValues = {
        title: parsedData.title,
        description: parsedData.description,
        projectManager: parsedData.projectManager,
        assignedTo: parsedData.assignedTo,
        status: parsedData.status,
   }

    const onSubmit = () => {
        dispatch(editProjectById(id,values) )
     
    }


    const { handleSubmit, handleChange, errors, values } = useForm (initialValues, onSubmit);

    return (
        <>
            <SubHeader content='flex-start'>
                <BackButton  text={'Edit project'} />
            </SubHeader>
            <Form 
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                values = {values}
                errors = {errors}
                btnText = {'Save changes'}
              
            />
        </>
    )
}
