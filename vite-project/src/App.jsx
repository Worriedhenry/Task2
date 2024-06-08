import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './component/parent'
function App() {


  const [colors, setColors] = useState([
    '#c7522a', '#e5c185', '#f0daa5', '#b8cdab',
    '#fbf2c4', '#74a892', '#008585', '#004343'
  ]);
  const [draggedIndex, setDraggedIndex] = useState(null)

  const change = (index, newColor) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  };

  const start = (index) => {
    setDraggedIndex(index);
  };

  const DROP = (index) => {
    const updatedColors = [...colors];
    const draggedColor = updatedColors[draggedIndex];
    updatedColors[draggedIndex] = updatedColors[index];
    updatedColors[index] = draggedColor;
    setColors(updatedColors);
    setDraggedIndex(null);
  };

  
  
  return (
    <>
      <Parent/>
      <div className="parent">
      {colors.map((color, index) => (
        <div
          className="color"
          style={{ backgroundColor: color }}
          draggable
          onDragStart={() => start(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => DROP(index)}
          onClick={() => document.getElementById(index).click()}
        >
          <input
            id={index}
            type="color"
            style={{ display: 'none' }}
            onChange={(e) => change(index, e.target.value)}
          />
        </div>
      ))}
    </div>
    </>
  )
}

export default App
