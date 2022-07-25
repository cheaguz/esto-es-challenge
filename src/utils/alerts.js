import Swal from "sweetalert2";


export const simpleAlert = (text) =>{
     Swal.fire({
     position: 'center',
     icon: 'success',
     title: `${text}`,
     showConfirmButton: false,
     timer: 1500})
};

export const failureAlert = () => {
    Swal.fire({
        title: 'Lo sentimos , hubo un error..',
        position: 'center',
        icon: 'warning',
        showConfirmButton: true,
        confirmButtonText: 'ok'  ,      
    })
}
