import React, { useState } from 'react'

// onNewCategory recibe el elemento necesario para FifExpertApp
export const AddCategory = ({onNewCategory}) => {

  // Hook useState para manejar el valor del input (campo de texto)
    const [inputValue, setinputValue] = useState('')

    // Función que se ejecuta cada vez que cambia el valor del input
    const onInputChange= (event) =>{
        // Actualiza el estado con el nuevo valor ingresado por el usuario
        setinputValue(event.target.value)
    }

    // Función que se ejecuta al enviar el formulario
    const onSubmit = (event) => {
      // Previene que la página se recargue al enviar el formulario
        event.preventDefault();
      //Si el valor es <=1 sale de la función
        if(inputValue.trim().length<=1) return;
      // Llama a la función onNewCategory (pasada como prop) con el nuevo valor ingresado
        onNewCategory(inputValue.trim());
      //Resetea el Value del input
        setinputValue('');
    }


  return (
    
    <form onSubmit={(event)=> onSubmit(event)}>
        <input
    type='text'
    placeholder='Busca tu Gif'
    //Valor presente
    value={inputValue}
    //Cada vez que cambia el valor se usa onChange para actualizar el valor original
    onChange={(event)=>onInputChange(event)}
    > 

    </input>

    </form>


  )
}
