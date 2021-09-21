import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Admin from './Components/Admin'
import Card from './Components/Card'

import recettes from './recettes'
// import firebase from './base'

function App(props) {

  const [pseudo, setpseudo] = useState(props.match.params.pseudo)
  const [recipes, setrecipes] = useState({})

  // const db = firebase.database()

  // useEffect(() => {
    // const recipesRef = db.ref("recipes");
    // const newRecipeRef = recipesRef.push();
    // newRecipeRef.set({recipes})
 // }, [recipes, db])

  function addRecipe(recipe){
    const recipesData = {...recipes}
    console.log('la recette:', recipe)
    recipesData[`recette-${Date.now()}`] = recipe;
    setrecipes(recipesData)
}
  function chargeExemple() {
    setrecipes(recettes)
  }

  let cards = []
  if(recipes !== undefined) {
    cards = Object.keys(recipes).map(key => (
      <Card key={key} details={recipes[key]} />
    ))
  }

  return (
    <div className="App">
      <Header pseudo={pseudo}/>
      <div className='chatbox'></div>
      <div className='recipebox'>
        <div className="cards">
          {cards}
        </div>
      </div>
      <Admin 
        addRecipe={addRecipe} 
        chargeExemple={chargeExemple} />
    </div>
  );
}

export default App;
