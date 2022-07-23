import React from 'react'
import './EditProject.styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';


export const EditProject = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const { handleSubmit, handleChange, errors, values} = useForm();
    
  return (
    <>
    <div className='SubHeader-addProject'>
        <button onClick={() => navigate('/')}>
            <img src='assets/icons/arrow.png' alt='back' />
            Back
        </button>
        <h1> Edit project </h1>
    </div>

    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Project name</label>
                <input type="text" name='title' value={values.title} onChange={handleChange} />
                <div className='errors'>{errors.title && <span>{errors.title}</span>} </div>
            </div>

            <div>
                <label>Description</label>
                <input type="text" name='description' value={values.description} onChange={handleChange} />
                <div className='errors'> {errors.description && <span>{errors.description}</span>} </div>
            </div>

            <div>
                <label>Project manager</label>
                <select name='projectManager' value={values.projectManager} onChange={handleChange}>
                    <option value=''>Select a person</option>
                    <option value='project-manager'>pm</option>
                </select>
                <div className='errors'> {errors.projectManager && <span>{errors.projectManager}</span>} </div>
            </div>

            <div>
                <label>Assigned to</label>
                <select name='assignedTo' value={values.assignedTo} onChange={handleChange}>
                    <option value=''>Select a person</option>
                    <option value='asigned-person'>asigned-person</option>
                </select>
                <div className='errors'> {errors.assignedTo && <span>{errors.assignedTo}</span>} </div>
            </div>

            <div>
                <label>Status</label>
                <select name='status' value={values.status} onChange={handleChange} >
                    <option value=''>status</option>
                    <option value='enabled'>enabled</option>
                    <option value='disabled'>disabled</option>
                </select>
                <div className='errors'> {errors.status && <span>{errors.status}</span>} </div>
            </div>
            <button type='submit'>Create project</button>
        </form>
    </div>
</>
  )
}
