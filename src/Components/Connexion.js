import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Connexion() {

  const [pseudo, setpseudo] = useState('')
  let history = useHistory();

  function goToApp(event) {
    event.preventDefault()
    history.push('/pseudo/' + pseudo)
  }

  function handleChange(event) {
    const pseudo = event.target.value
    setpseudo(pseudo )
  }

  return (
    <div className='connexionBox'>
      <form className='connexion' onSubmit={goToApp} >
        <h2>The Hungry Chat</h2>
        <input
          type='text'
          value={pseudo}
          onChange={handleChange}
          placeholder='Nom du Chef'
          pattern='[A-Za-z-]{1,}'
          required />
        <button type='submit'>GO</button>
        <p>Pas de caractères spéciaux.</p>
      </form>
    </div>
  )
}

export default Connexion
