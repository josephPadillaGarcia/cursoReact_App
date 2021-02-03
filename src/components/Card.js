import React from 'react'
import exerciseImg from '../img/exercise.png'
import circleImg from '../img/circles.png'
import './styles/Card.css'

class Card extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
		}
	}

	render(){
		// ====================
		/* PROPS -> son establecidas por el padre y son fijas durante toda la vida de un componente */
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
							<img src={this.state.image} className="float-right"/>
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