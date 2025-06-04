import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    //Se da un valor predefinido para comprobar el correcto funcionamiento
    const [categories, setCategories] = useState(['Bob esponja']);

    //Función que recibe el nuevo elemento a introducir en categories
    const onAddCategory = (newCategory) =>{
        console.log(newCategory);
        //En caso de que ya exista una previo igual al que se pretende insertar se sale de la función
        if(categories.includes(newCategory)) {
            return} ; 
    
        //Crea una nueva copia del array e introduce la categoria 
        setCategories([newCategory, ...categories]);
            
        
    }



  return (
    <>
        {/* /**Titulo */}
        <h1>GifExpertApp</h1>

        {/* /* Input */ }
        <AddCategory
        /* Recibe el elemento a insertar en categories(event) */
            onNewCategory={event => onAddCategory(event)}>
        </AddCategory>

        {/* Listado de Gif  */}

        
        {categories.map(category =>{
                return(
                    /**A cada category se le aplica GifGrid */
                    <GifGrid key={category} category={category}/>
                )
                      
        })}
            
        

            {/* Gif item */}


    </>
  )
}
