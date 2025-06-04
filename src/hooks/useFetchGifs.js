

import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    //Hook useState: 'images' será el array de gifs que se mostrará en pantalla
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Función que toma las imágenes es async porque la llamada de la api demanda un tiempo hasta que manda todos los datos necesarios
  const getImages = async () => {
    const newImages = await getGifs(category);
    //Actualiza el array con las imagenes guardadas en newImages tras llamar a getGifs
    setImages(newImages);
    //Al haber obtenido las nuevas imagenes dejamos de cargar
    setIsLoading(false);
  }


  // useEffect se ejecuta una sola vez al montarse el componente (por el array de dependencias vacío)
  useEffect(() => {
    getImages();
  }, []) // El array vacío [] indica que solo se ejecuta al renderizar por primera vez

  //Se usa una sintaxis abreviada es lo mismo que hacer images:images
  return {
    images,
    isLoading
  }
    
  
}
