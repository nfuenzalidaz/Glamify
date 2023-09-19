import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./FormPerfil.module.css";

function PerfilUser () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const currentUserId = useSelector(state => state.id);
    const [showUserInfo, setShowUserInfo ] = useState(true);
    const [ profileIsCurrentUser, setProfileIsCurrentUser ] = useState(true);

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        direccion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes utilizar formData para enviar los datos a tu backend o realizar la acción que desees
        // Por ejemplo, puedes hacer un dispatch de una acción para guardar los datos en el estado global
    };

    useEffect(() => {
        if(id === currentUserId){
            setProfileIsCurrentUser(true);
        } else {
            setProfileIsCurrentUser(false);
        }
    }, [id, currentUserId]);
 
    useEffect(() => {
        if(!user.phonenumber && !user.language && !user.country){
            setShowUserInfo(false);
        } else {
            setShowUserInfo(true);
        }
    }, [user]);

    useEffect(() => {
        async function getUserData(id){
          try {
              const data = getUser(id);
              dispatch(data)
          } catch (error) {
              console.log(error);
          }
      }
        
        getUserData(id);

        return () => dispatch(resetUser());
      }, [dispatch, id]);

    return (
        <Container fluid style={{ height: 'auto' }} className='py-lg-5 py-md-5 py-2 mb-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="correo">Correo:</label>
                    <input 
                        type="email" 
                        name="correo" 
                        value={formData.correo} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input 
                        type="tel" 
                        name="telefono" 
                        value={formData.telefono} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="direccion">Dirección:</label>
                    <input 
                        type="text" 
                        name="direccion" 
                        value={formData.direccion} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
            
            {/* Resto del código */}
        </Container>
    );
}

export default PerfilUser;
