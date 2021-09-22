import React from 'react'
import { MdEdit, MdClear } from 'react-icons/md';
import { IconContext } from "react-icons";

function Card({details}) {

  const ingredients = details.ingredients
    .split(',')
    .map(item =>  <li key={item}>{item}</li>)

  const instructions = details.instructions
    .split('\n')
    .map(item =>  <li key={item}>{item}</li>)

  const requiredImg = path =>{
    try{
      return require(`../img/${path}`).default
    } catch(err) {
      return require(`../img/default.jpeg`).default
    }
  }
   
  return(
    <div className='card'>
      <div className='image'>
        <img src={requiredImg(details.image)} alt={details.nom}/>
      </div>
      <div className='recette'>
        <div className="card-header">
          <h3>{details.nom}</h3>
        </div>
        <ul className="list-ingredients">
          {ingredients}
        </ul>
        <ol className="list-instructions">
          {instructions}
        </ol>
      </div>
    </div>
  )
}

export default Card