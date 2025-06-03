import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

//Se recibe el nombre de la categoria sobre la que hacer el Grid
export const GifGrid = ({category}) => {

//ook useState: 'images' será el array de gifs que se mostrará en pantalla
  const [images, setImages] = useState([]);

  //Función que toma las imágenes es async porque la llamada de la api demanda un tiempo hasta que manda todos los datos necesarios
  const getImages = async() =>{
    const newImages= await getGifs(category);
    //Actualiza el array con las imagenes guardadas en newImages tras llamar a getGifs
    setImages(newImages);
  }


  // useEffect se ejecuta una sola vez al montarse el componente (por el array de dependencias vacío)
  useEffect(()=>{
    getImages();
  }, []) // El array vacío [] indica que solo se ejecuta al renderizar por primera vez
  

  
  return (
    <>
        {/* Muestra el nombre de la categoría como título */}
        <h3>{category}</h3>
        <ol>
          {images.map(image =>{
                return(
                    //Se añade el id  como key y se muestra el titulo
                    <li key={image.id}>{image.title}</li>
                )})}

        </ol>
        
    
    </>
  )
}
