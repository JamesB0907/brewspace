import { useState } from 'react'
import { RecipeForm } from '../recipe/RecipeForm'
import "./SidePanel.css"

export const SidePanel = ({ setRecipes }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <article className={`sidepanel ${isCollapsed ? 'collapsed' : ''}`}>
        <RecipeForm 
        className="form__container"
        setRecipes={setRecipes} />
      </article>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          width: '40px',
          height: '40px', 
          border: 'double hsl(34, 57%, 70%)',
          background: 'linear-gradient(217deg, #be7027de, #ca8b3893)',
          marginRight: '10px',
          transition: 'all 0.3s',
          transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
      >
        {'<'}
      </button>
    </>
  )
}
