import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Admin from './Components/Admin'
import Card from './Components/Card'

import recettes from './recettes'
import {firebase} from './base'

function App(props) {

  const [pseudo, setpseudo] = useState(props.match.params.pseudo)
  const [recipes, setrecipes] = useState({})

  const db = firebase.database()

  

  useEffect(() => {
    const recipesRef = db.ref(`/${pseudo}/recipes`);
    const newRecipeRef = recipesRef.push();
    console.log(recipes)
    newRecipeRef.set({recipes})
  }, [recipes, db, pseudo])

 useEffect(() => {
  const recipesRef = db.ref(`/${pseudo}/recipes`);
  recipesRef.get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      Object.keys(snapshot.val()).map(rec => console.log('snap:', snapshot.val()[rec].recipes))
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
 }) 

  function addRecipe(recipe){
    const recipesData = {...recipes}
    recipesData[`recipe-${Date.now()}`] = recipe;
    setrecipes(recipesData)
  }

  function updateRecipe(key, newRecipe){
    const recipesData = {...recipes}
    recipesData[key] = newRecipe
    setrecipes(recipesData)
  }

  function removeRecipe(key){
    const recipesData = {...recipes}
    delete recipesData[key]
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
        recipes={recipes}
        addRecipe={addRecipe} 
        updateRecipe={updateRecipe}
        removeRecipe={removeRecipe}
        chargeExemple={chargeExemple} />
    </div>
  );
}

export default App;
