import * as React from 'react';
import { MenuItem, Menu } from '@mui/material'  
import { useNavigate } from 'react-router-dom'
import { useDispatch  } from 'react-redux';
import { deleteById } from '../redux/projectActions';
import Swal from "sweetalert2";


export const MenuButton = ({id , data})=> {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




const handleEdit = () => {
  localStorage.setItem('data',JSON.stringify(data))
  navigate(`/edit-project/${id}`)
  handleClose()
};

const handleDelete = () => {
  Swal.fire({
    title: 'Eliminar proyecto ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
    })
    .then((result) => {
    if (result.isConfirmed) {
      dispatch( deleteById(id) )
    }
  })
  handleClose()
}




  return (
    <div>
      <button
        id='btn-subHeader'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src='assets/icons/puntos.png'  alt='points' />
      </button>


      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

      >
        <MenuItem onClick={handleEdit}>
            <img src='assets/icons/edit.png' alt='icon-edit'/> 
                Edit
            </MenuItem >
            <MenuItem onClick={handleDelete}>
            <img src='assets/icons/delete.png' alt='icon-delete'/>
                Delete
            </MenuItem>
        
      </Menu>
    </div>
  );
}
