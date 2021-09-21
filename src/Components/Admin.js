import React from 'react'
import AddRecipe from './AddRecipe'

function Admin(props) {
  return(
    <footer>
      <div className='cards'>
        <AddRecipe addRecipe={props.addRecipe}/>
      </div>
      <button onClick={props.chargeExemple}>
        Fill in
      </button>
    </footer>
  )
}

export default Admin