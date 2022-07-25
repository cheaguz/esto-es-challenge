import React from 'react'
import { useForm } from '../hooks/useForm';
import { SubHeader } from '../components/styled/StyledIndex';
import { Form } from '../components/Form';
import { BackButton } from '../components/BackButton';
import { useDispatch } from 'react-redux/es/exports';
import { createProject } from '../redux/projectActions';

export const NewProject = () => {
    const dispatch = useDispatch();
    const initialValues = {
        title:'',
        description: '',
        projectManager: '',
        assignedTo: '',
        status: '',
    };

    const onSubmit = () => {
        dispatch(createProject(values))
    }

    const { handleSubmit, handleChange, errors, values } = useForm(initialValues,onSubmit);
      return (
        <>
            <SubHeader content='flex-start'>
                <BackButton text={'Add project'} />
            </SubHeader>

            <Form 
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                values = {values}
                errors = {errors}
                btnText = {'Create project'}
            />
        </>
    )
}