import React from 'react'
import AddRecipe from './AddRecipe'
import AdminForm from './AdminForm'

function Admin(props) {
  return(
    <footer>
      <div className='cards'>
        <AddRecipe addRecipe={props.addRecipe}/>
        {
          Object.keys(props.recipes)
            .map(key => <AdminForm 
              updateRecipe={props.updateRecipe}
              removeRecipe={props.removeRecipe}
              recipes={props.recipes}
              key={key} 
              id={key}
            />)
        }
      </div>
      <button onClick={props.chargeExemple}>
        Fill in
      </button>
    </footer>
  )
}

export default Admin