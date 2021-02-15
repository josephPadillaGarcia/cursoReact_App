import React from 'react'
import './styles/Card.css'
import addImg from '../img/add.png'
import {Link} from 'react-router-dom'

function add(props){

	return(

		<div className="btn-agregar">
			<Link to="/exercise/new">
				<img src={addImg} alt="" />
			</Link>
		</div>

	)

}

export default add