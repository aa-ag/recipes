import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <img src={image} alt="food photo" className={style.image}/>
            <ol>
                {ingredients.map(ingridient => (
                    <li>{ingridient.text}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;