import React from 'react'

function AdminForm({id: key, updateRecipe, recipes, removeRecipe}) {

  const recette = recipes[key]

  function handleChange(event, key) {
    const {name, value} = event.target
    const recette1 = recipes[key]
    recette1[name] = value
    updateRecipe(key, recette)
  }

  return(
    <div className='card'>
      <form  className="admin-form">
        <input value={recette.nom} onChange={e => handleChange(e, key)} type="text" name="nom" placeholder='Nom de la recette'/>
        <input value={recette.image} onChange={e => handleChange(e, key)} type="text" name="image" placeholder="Adresse de l'image"/>
        <textarea value={recette.ingredients} onChange={e => handleChange(e, key)}name="ingredients" rows='3' placeholder='Liste des ingrédients'/>
        <textarea value={recette.instructions} onChange={e => handleChange(e, key)} name="instructions" rows='15' placeholder='Liste des instructions'/>
      </form>
      <button onClick={()=> removeRecipe(key)}>Remove recipe</button>
    </div>
  )
}

export default AdminForm