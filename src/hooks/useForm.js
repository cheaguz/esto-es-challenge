import { useFormik } from 'formik';
import { validationSchema } from '../utils/formValidations';

export const useForm = (initialValues , onSubmit) => {

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