import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';


function EditarUsuario()  {
    const params = useParams();
    const navegar = useNavigate();
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        axios.post('http://localhost:5000/api/usuario/obtener-data-usuario', {idusuario: params.idusuario}).then(res =>  {
            let dataUsuario = res.data[0];
            setNombre(dataUsuario.nombre)
            setEmail(dataUsuario.email)
            setTelefono(dataUsuario.telefono)
        })
    }, [])

    function editarUsuario() {
        const usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: params.idusuario
        }

        axios.post('/api/usuario/editar-usuario', usuario)
        .then(res =>{
            alert('Usuario modificado Correctamente')
            navegar('/');
        })
        .then(err =>{
            console.log(err);
        })
    }


    return (
        <div className='container'>
        <div className='row'>
                <h2 className='mt-4'> Editar Usuario </h2>
        </div>

        <div className='row'>
            <div className='col-sm-6 offset-3'>
                <div className='mb-3'>
                    <label htmlFor='nombre' className='form-label'>Nombre</label>
                    <input type='text' className='form-control' value={nombre} onChange={(e) =>{setNombre(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input type='email' className='form-control' value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='telefono' className='form-label'>Telefono</label>
                    <input type='text' className='form-control' value={telefono} onChange={(e) =>{setTelefono(e.target.value)}}></input>
                </div>
                <button onClick={editarUsuario} className='btn btn-success'>Guardar Usuario</button>
            </div>
        </div>
    </div>
    )
}

export default EditarUsuario;