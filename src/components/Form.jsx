import React from 'react'
import { RedButton, StyledForm, StyledContainer } from './styled/StyledIndex';
import { Input } from './Input';
import { Select } from './Select';

export const Form = ({ handleSubmit, handleChange, values, errors, btnText }) => {
    return (
        <StyledContainer>
            <StyledForm onSubmit={handleSubmit}>
                <Input
                    handleChange={handleChange}
                    value={values.title}
                    label={'Project name'}
                    errors={errors.title}
                    name={'title'}
                />
                <Input
                    handleChange={handleChange}
                    value={values.description}
                    label={'Description'}
                    errors={errors.description}
                    name={'description'}
                />
                <Select
                    label={'Project manager'}
                    value={values.projectManager}
                    handleChange={handleChange}
                    options={['Walt cosani']}
                    errors={errors.projectManager}
                    placeHolder={'Select a person'}
                    name={'projectManager'}
                />
                <Select
                    label={'Assigned to'}
                    value={values.assignedTo}
                    handleChange={handleChange}
                    options={['Ignacio Truffa']}
                    errors={errors.assignedTo}
                    placeHolder={'Select a person'}
                    name={'assignedTo'}
                />
                <Select
                    label={'Status'}
                    value={values.status}
                    handleChange={handleChange}
                    options={['enabled', 'disabled']}
                    errors={errors.status}
                    placeHolder={'Select a status'}
                    name={'status'}
                />

                <RedButton type='submit' top={'3%'} bottom='30px'> {btnText} </RedButton>
            </StyledForm>
        </StyledContainer>
    )
}
