import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

function UsuarioIndividual({ usuario }) {
    const navegar = useNavigate()

    useEffect(() => {
        AOS.init()
    }, [])
    
    
    function eliminarUsuario(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://localhost:5000/api/usuario/eliminar-usuario', {idusuario: id}).then(res => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setTimeout(() => {
                        navegar(0)
                    }, 1500);
                }).catch(err => {
                    console.log(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Hubo un Error al eliminar el usuario',
                    })
                })
                
            }
          })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.idusuario}</li>
                        <li className='list-group-item'>{usuario.nombre}</li>
                        <li className='list-group-item'>{usuario.email}</li>
                        <li className='list-group-item'>{usuario.telefono}</li>
                    </ul>
                    <Link to={`/editar-usuario/${usuario.idusuario}`} ><li className='mt-4 btn btn-success'>Editar</li></Link>
                    &nbsp;
                    <button className='mt-4 btn btn-danger' onClick={() =>{eliminarUsuario(usuario.idusuario)}} >Eliminar</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividual;