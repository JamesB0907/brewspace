import React, { useState } from 'react'


export const RecipeSearch = ({ setterFunction, searchTermState, searchFunction, recipes}) => {

  const handleInputChange = (event) => {
    setterFunction(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    searchFunction()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTermState} onChange={handleInputChange} placeholder="Enter Your Search" />
      <button type="submit">Search</button>
    </form>
  )
}