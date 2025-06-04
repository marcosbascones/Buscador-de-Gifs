export const getGifs=async(category)=>{
    const url= `https://api.giphy.com/v1/gifs/search?api_key=dR6WId4CQqPapcf2iVdnFHBW0Wb2jXnT&q=${category}&limit=2`;

    // Realiza la petición HTTP con fetch y espera la respuesta
    const resp = await fetch(url);
    // Convierte la respuesta en formato JSON y extrae la propiedad "data"
    const {data} = await resp.json();

    // Mapea el array de resultados "data" para quedarse solo con los datos necesarios:
    const gifs= data.map(img=>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    console.log(gifs);
    return gifs;
  }