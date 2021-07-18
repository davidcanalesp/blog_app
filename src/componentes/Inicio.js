import React,{useContext} from 'react';
import {ContextoTema} from './../contextos/ContextoTema'
import Controles from './Controles';

const Inicio = () => {

	return (
		<div>
			<h2>Página de Inicio</h2>
			<p>Esta es la página principal de nuestro sitio.</p>
			<Controles/>
		</div>
	)
	}	
 
export default Inicio;