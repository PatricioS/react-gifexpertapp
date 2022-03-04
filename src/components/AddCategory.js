import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    //Si yo no le pongo nada, el estado inicial es undefined, si yo quiero que sea un string vacio, debo colocar
    //un string vacio.
    const [inputValue, setInputValue] = useState(''); 
    
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = (e) => {
        //para evitar que la pagina se refresque al hacer submit o enter en el input.
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( ( cat ) => [ inputValue, ...cat ] );
            setInputValue('');
        }
    };

    //cuando retorno solo un Form, no es necesario el fragment o <>.
    //Cuando presiono un enter en el form, se hace un posteo y un refresh completo de la app.
    //Esto no se usa a estas alturas, por lo que debo colocar un e.preventDefault();
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value= { inputValue }
                onChange={ handleInputChange }
            >
            </input>  
        </form>
    );
    
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}
