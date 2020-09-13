import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, url}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Calories: <b>{calories.toFixed(2)}</b></p>
            <img src={image} alt="food photo" className={style.image}/>
            <ol>
                {ingredients.map(ingridient => (
                    <li>{ingridient.text}</li>
                ))}
            </ol>
                <p>Learn more about this recipe <a href={url} target="_blank">here</a>.</p>
        </div>
    );
};

export default Recipe;