import * as Yup from 'yup';

const isRequired = '* El campo es requerido'
export const validationSchema = Yup.object().shape({
    title: Yup.string().required(isRequired),
    description: Yup.string().required(isRequired),
    projectManager: Yup.string().required(isRequired),
    assignedTo: Yup.string().required(isRequired),
    status: Yup.string().required(isRequired)
});