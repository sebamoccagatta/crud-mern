import axios from 'axios';
import {useEffect, useState} from 'react';

import UsuarioIndividual from './UsuarioIndividual';

function ListaUsuarios() {

    const [dataUsuarios, setDataUsuarios] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/usuario/obtener-usuarios').then(res => {
          setDataUsuarios(res.data)
      }).catch(err => {
          console.log(err);
      })

    }, []);

    //Mapear Lista de Usuarios
    const listaUsuarios = dataUsuarios.map(usuario => {
        return(
            <div >
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    })
    
    return (
        <div>
            <h2> Lista de Usuarios</h2>
            {listaUsuarios}
        </div>
    )
}

export default ListaUsuarios;