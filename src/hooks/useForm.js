import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { newProject } from '../services/projectServices';

export const useForm = () => {
    const navigate = useNavigate();

    const isRequired = '* El campo es requerido'
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(isRequired),
        description: Yup.string().required(isRequired),
        projectManager: Yup.string().required(isRequired),
        assignedTo: Yup.string().required(isRequired),
        status: Yup.string().required(isRequired)
    });

    const initialValues = {
        title: '',
        description: '',
        projectManager: '',
        assignedTo: '',
        status: '',
    }

    const onSubmit = () => {
        newProject(values)
        alert('Se envio el form')
        navigate('/')
    };

    const formik = useFormik({initialValues, validationSchema, onSubmit})
    const { handleSubmit, handleBlur, handleChange, errors, touched, values } = formik

    return ({
        handleSubmit,
        handleBlur,
        handleChange,
        errors,
        touched,
        values
    })
}