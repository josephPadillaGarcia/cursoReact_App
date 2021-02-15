import React from 'react'
import exerciseImg from '../img/exercise.png'
import circleImg from '../img/circles.png'
import './styles/Card.css'

class Card extends React.Component{
	
	render(){
		// ====================
		/* PROPS -> son establecidas por el padre y SON FIJOS durante toda la vida de un componente */
		//===============
		//return <h1> Hola pendejo </h1>
		const {title, descripcion, img, leftColor, colorIzquierda} = this.props
		return ( // de esto modo, las etiquetas tienen que estar dentor de un DIV
			<div className="card mx-auto Fitness-Card"

			style={{

				backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor}, ${colorIzquierda})`

			}}

			>
				<div className="card-body">
					<div className="row center">
						<div className="col-6">
							<img src={img} className="float-right"/>
						</div>
						<div className="col-6 Fitness-Card-Info">
							<h1>{title}</h1>
							<p>{descripcion}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Card