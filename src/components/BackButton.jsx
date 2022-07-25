import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BackButton = ({text}) => {
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => navigate('/')} id='btn-subHeader'>
                <img src='assets/icons/arrow.png' alt='back' />
                Back
            </button>
            <h1 id='text-subHeader'> {text} </h1>
        </>
    )
}
