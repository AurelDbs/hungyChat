import React from 'react'

function Header({pseudo}) {

  // formattage du titre si prénom en français commençant pas une voyelle
  // function formatPseudo(pseudo){
  //   return /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
  // }
  // console.log(formatPseudo(pseudo))

  return(
    <header>
      <h1>The {pseudo}'s Hungry Chat</h1>
    </header>
  )
}

export default Header