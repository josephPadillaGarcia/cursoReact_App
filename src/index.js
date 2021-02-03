import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/Card.js'

import 'bootstrap/dist/css/bootstrap.css'

/*const user = {

	firstName: 'Joseph',
	LastName: 'Padilla'

}

const works = {

	work01: 'Ingeniero de Sistemas',
	work02: 'Contador',
	work03: 'Administrador'

}

function getName(user, works){
	//return `${user.firstName} y soy ${works.work01}`
	return user.firstName + ' yo soy ' + works.work01;
}

function getGreeting(user){
	if (user) {
		return <h1>Hellos React, I'm {getName(user, works)}</h1>
	}
	return <h1>Hello que chucha miras ? </h1>
}

const elemt = (

	<div>
		<p>{getGreeting(user, works)}</p>
		<p>Egresado de la carrera {works.work01} en el 2020, tiene experiencia desarrollando 
		páginas web y actualmente esta aprendiendo React, Git, GitHub, WordPress y Javascript,
		parace mucho pero si se puede.</p>		
	</div>

)*/
const container = document.getElementById('root')

ReactDOM.render(<Card 

					title= "Technique Guides"
					descripcion= "Learn amazing street workout and calisthening"
					img= "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
					leftColor= "#A74CF2"
					colorIzquierda= "#617BFB"

				 />, container);
