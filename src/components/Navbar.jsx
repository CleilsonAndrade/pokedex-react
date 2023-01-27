import React, { useContext } from "react"
import FavoriteContext from "../contexts/favoritesContext"

export default function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext)

  const LogoImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  return (
    <nav>
      <div>
        <img
          src={LogoImg}
          alt="Logo da PokeApi"
          className="navbar-img"
        />
      </div>
      <div>{favoritePokemons.length}💖</div>
    </nav>
  )
}