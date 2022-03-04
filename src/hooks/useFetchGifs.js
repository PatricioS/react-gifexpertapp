//El nombre con "use" es para indicar que el archivo contiene un hook.
//Todos los use son hooks, useState, useEffect, etc.
//Creo este archivo para poder indicarle al usuario cuando estoy haciendo un fetch y cuando termine de cargar la data.
//Los hooks no son mas que funciones.

//A diferencia de los functional components, no es necesaria la importacion de react a menos que regrese JSX.
//Estos hooks pueden tener estado.

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    //Tambien puedo agregar effects en los custom hooks. Esto es para que se ejecute mi funcion por ejemplo, cuando
    //la categoria cambia.

    //Los effect no pueden contener funciones ASYNC.
    useEffect( () => {
        getGifs( category )
            .then( (imgs) => { 
                setState({
                    data: imgs,
                    loading: false,
                });
            })
    }, [ ]);

    return state; // { data: [] , loading: true }
}
