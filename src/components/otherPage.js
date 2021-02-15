import React from 'react'
import './styles/Card.css'
import addImg from '../img/add.png'


function add(props){

	return(

		<div className="btn-agregar">
			<img src={addImg} alt="" />
		</div>

	)

}

export default add