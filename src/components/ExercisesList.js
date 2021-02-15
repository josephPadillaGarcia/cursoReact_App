import React from 'react'
import Card from './Card'

function ExercisesList(props){

	return(

		<div>
			
			{
				// map() -> Itera todos los elementos que tenga el arreglo y retorna cada elementos que este itere
				props.listExercises.map((exercises) =>{
					return(

						<Card 

							title= {exercises.title}
							descripcion= {exercises.description}
							img= {exercises.img}
							leftColor= {exercises.leftColor}
							colorIzquierda= {exercises.rightColor}

						 />

					)
				})
			}

		</div>

	)

}

export default ExercisesList