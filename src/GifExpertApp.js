//El atajo para crear el componente rapido es "rafc"

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //De esta manera no se hacen los listados a menos que no cambien nunca.
    // const categories = ['Bleach', 'Rurouni Kenshin', 'Dragon Ball'];
    //Para declarar las variables que van a cambiar y se van a renderizar utilizo el useState

    const [categories, setCategories] = useState( [ 'Bleach' ] );
    
    //El hook useState, en el callback de setCategories, me da un parametro que contiene el estado anterior de categories.
    // const handleAdd = () => {
    //     //setCategories( [ 'Naruto' , ...categories ] );
    //     setCategories( ( cats ) => [ 'Naruto' , ...cats ] );
    // };

    
    //Para la comunicacion entre componentes, envio la referencia de mi setCategories al componente AddCategory.
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {
                    categories.map( (category, index) => (
                        <GifGrid key={ category } category={ category } /> 
                    ))  
                        //En la consola aparece el siguiente warning.
                        //react_devtools_backend.js:4045 Warning: Each child in a list should have a unique "key" prop.
                        //En react es necesario definir el Key para que react sepa cual es el elemento que esta renderizando.
                        //No me es conveniente definir un Key del index.
                }
            </ol>
        </>
    );

}
