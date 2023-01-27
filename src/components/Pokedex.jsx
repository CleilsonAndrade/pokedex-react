import React from "react"
import Pagination from "./Pagination"
import Pokemon from "./Pokemon"

export default function Pokedex(props) {
  const { pokemons, loading, page, setPage, totalPages } = props

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  const onRightClickHandler = () => {
    if (page !== totalPages) {
      setPage(page + 1)
    }
  }

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokédex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (<div>Carregando...</div>) :
        (
          <div className="pokedex-grid">
            {pokemons && pokemons.map((pokemon, index) => {
              return (
                <Pokemon key={index} pokemon={pokemon} />
              )
            })}
          </div>
        )
      }
    </div>
  )
}