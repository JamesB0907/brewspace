import { useState } from 'react'
import { RecipeForm } from '../recipe/RecipeForm'
import "./SidePanel.css"

export const SidePanel = ({ setRecipes }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <article className={`sidepanel ${isCollapsed ? 'collapsed' : ''}`}>
        <RecipeForm setRecipes={setRecipes} />
      </article>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#f2f2f2',
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
