//Coleccion de todos los elementos que van a mostrarse en pantalla.

// import React, { useState , useEffect } from 'react'; 
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs( category );

    console.log( loading );

    //El useEffect recibe una funcion que es la que quiero ejecutar y un arreglo (o lista es lo mismo) de dependencias.
    //Si yo le envio un arreglo vacio, quiere decir que no tiene dependencias y se va a ejecutar una sola vez, cada vez que recargue la pagina con f5.
    //Si tiene el arreglo vacio es similar al componendidmount de react con componentes de clases y quiere decir que
    //se va a ejecutar cuando el componente es renderizado por primera vez.
    // useEffect( () => {
    //     getGifs( category )
    //         .then( (imgs) => setImages(imgs) );
    // }, [ category ]);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ]);

    
    //Si coloco el getGifs aca. Cuando presiono un boton para recargar un elemento, react ejecuta esta funcion
    //y hace un fetch a la api de gifs. 
    //Ademas, si tengo un hook setImagenes dentro del getGifs, esto hace que los gifs cambien y se ejecutaria en loop
    //todo el codigo de este componente.
    //Para eso utilizo useEfect, que me permite ejecutar cierto codigo de manera condicional.
    
    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown"> { category } </h3>
            { loading && <p className="animate__animated animate__flash animate__infinite">Loading...</p> }
            <div className="card-grid">
                {
                    //Al enviar el spread de img en GifGridItem "{...img}"
                    //lo que hago es enviar cada una de las propiedades de las imagenes como una propiedad independiente.
                    //Es algo muy utilizado, o tambien puedo recibir como props y hacer props.id, props.title, props.url.
                    images.map( (img) => (
                        <GifGridItem 
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    );
}
