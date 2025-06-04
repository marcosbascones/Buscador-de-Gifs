import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

//Se recibe el nombre de la categoria sobre la que hacer el Grid
export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);


  return (
    <>
      {/* Muestra el nombre de la categoría como título */}
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map((image) => (
          // Se añade el id como key y se puede mostrar más datos si se pasan como props
          <GifItem key={image.id}
            // title={image.title}
            // url={image.url} 
            
            {...image}/>
        ))}
      </div>



    </>
  )
}
