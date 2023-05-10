import React, { useState } from 'react';
import './Recipe.css';

export const RecipeSearch = ({ setterFunction, searchTermState, handleSearch, handleKeyPress }) => {
  
  const handleInputChange = (event) => {
    setterFunction(event.target.value);
  };

  return (
    <form className="search__container" onSubmit={handleSearch}>
      <input autoFocus 
      type="search"
      autoComplete="off"
      value={searchTermState}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      placeholder="Enter Your Search" />
      <button type="submit"></button>
    </form>
  );
};
