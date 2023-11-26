import React, { useState } from 'react';
// import SocialButton from '.componentes/SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialButton from './SocialButton';

const Registro = () =>{

return (
<>
<Card border="warning border-5 rounded-4">
    <h1 className='text-center pt-5 fw-bold'>Crea tu cuenta</h1>
<SocialButton/>
<Formulario />
</Card>
</>
);
};
export default Registro