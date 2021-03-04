import React from 'react';

const ColorOptions = ({colors, snake, fruit, setSnakeColor, setFruitColor}) => {
  return <div className={'color-options-wrapper'}>
    <div className="color-snake-options">
      <span>snake:</span>
      <div className="color-snake-container">
        {colors.map((color, i) => {
          const addClass = snake === color ? ' color-snake-item_active' : '';
          return <div key={i} onClick={()=>setSnakeColor(color)} className={"color-snake-item " + addClass} style={{backgroundColor: color}}/>
        })}
      </div>
    </div>
    <div className="color-fruit-options">
      <span>fruit:</span>
      <div className="color-fruit-container">
        {colors.map((color, i) => {
          const addClass = fruit === color ? ' color-fruit-item_active' : '';
          return <div key={i} onClick={()=>setFruitColor(color)} className={"color-fruit-item "+addClass} style={{backgroundColor: color}}/>
        })}
      </div>
    </div>
  </div>
}

export default ColorOptions;
