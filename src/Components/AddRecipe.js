import React, { useState } from 'react'

function AddRecipe({addRecipe}) {
  const [recipe, setRecipe] = useState({
    nom: '',
    image: '',
    ingredients: '',
    instructions: ''
  })

  function handleChange(event) {
    const {name, value} = event.target
    setRecipe({...recipe, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    addRecipe(recipe)
  } 

  return(
    <div className='card'>
      <form className="admin-form ajouter-recette" onSubmit={handleSubmit}>
        <input onChange={handleChange}
          value={recipe.nom} 
          name="nom" 
          type="text" 
          placeholder="Nom de la recette"/>
        <input onChange={handleChange}
          value={recipe.image} 
          name="image" 
          type="text" 
          placeholder="Nom de l'image"/>
        <textarea onChange={handleChange}
          value={recipe.ingredients} 
          name="ingredients" 
          rows="3"  
          placeholder="Liste des ingredients" />
        <textarea onChange={handleChange}
          value={recipe.instructions} 
          name="instructions" 
          rows="15"  
          placeholder="Liste des instructions" />
          <button type="submit">Add recipe</button>
      </form>
    </div> 
  )
}

export default AddRecipe