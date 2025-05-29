import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{
        console.log(newCategory);
        if(categories.includes(newCategory)) {
            return} ; 
       
        setCategories([...categories, newCategory]);
            
        
    }



  return (
    <>
        {/* /**Titulo */}
        <h1>GifExpertApp</h1>

        {/* /* Input */ }
        <AddCategory
        /* setCategories={setCategories} */
            onNewCategory={event => onAddCategory(event)}>
        </AddCategory>

        {/* Listado de Gif  */}

        
        {categories.map(category =>{
                return(
                    <GifGrid key={category} category={category}/>
                )
                      
        })}
            
        

            {/* Gif item */}


    </>
  )
}
