import React from 'react'
import { Avatar } from '@mui/material'
import { takeInitials } from '../utils/takeInitials'
const fakeImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr1XXnIRUm996t9jQ1rrcfSvgDgLtwyDqMQ&usqp=CAU"

const avatarStyles = {
    width: 26,
    height: 26,
    fontSize: 9,
    color: '#CA4A02',
    backgroundColor: '#FFE0B3',
    marginRight : '3%'
};

const divStyles = { display: 'flex', alignItems: 'center' };

export const ProfileAvatar = ({ name, image }) => {
    return (
        <>
            {image
                ?
                <div style={divStyles}>
                    <Avatar sx={avatarStyles} src={fakeImage} />
                    <span className='project-name'> {name} </span>
                </div>
                :
                <div style={divStyles} >
                    <Avatar sx={avatarStyles} >
                        {takeInitials(name)}
                    </Avatar>
                    <span className='project-name'> {name} </span>
                </div>

            }
        </>
    )
}
