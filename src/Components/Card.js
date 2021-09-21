import React from 'react'

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
        <h2>{details.nom}</h2>
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