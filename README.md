# GifExpertApp - Buscador de Gifs con React

Aplicación web para buscar y mostrar gifs animados usando la API de Giphy.

Desplegada en Netlify:  
👉 https://app-recact-gifs.netlify.app/

Desplegada en GitHub Pages:  
👉 https://marcosbascones.github.io/Buscador-de-Gifs/

## ⚙️ Tecnologías y conceptos utilizados

- **React** con componentes funcionales.
- **Hooks** de React:
  - `useState` para manejar estados reactivos.
  - `useEffect` para ejecutar efectos secundarios al montar el componente.
  - **Custom hook** `useFetchGifs` para centralizar la lógica de búsqueda.
- **Consumo de API** (Giphy) mediante `fetch` y funciones async/await.
- **Renderizado condicional** y mapeo dinámico de resultados.
- Validación de entradas del usuario para evitar búsquedas duplicadas o vacías.

## 🧠 Lógica del proyecto

- El usuario ingresa una categoría, que se agrega a una lista si no existe previamente.
- Por cada categoría, se realiza una petición a la API de Giphy y se muestran los primeros 5 gifs.
- La carga de gifs incluye un mensaje de espera mientras se obtienen los datos.

## 🧩 Estructura de componentes

- `GifExpertApp`: Componente principal que controla el estado de las categorías.
- `AddCategory`: Formulario controlado para ingresar nuevas búsquedas.
- `GifGrid`: Muestra el título de la categoría y una cuadrícula de resultados.
- `GifItem`: Componente individual para cada gif (imagen + título).
- `useFetchGifs`: Custom hook que obtiene gifs desde la API y maneja el estado de carga.
