import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GiftItem.jsx />>', () => { 

    const title= 'Saitama';
    const url= 'https://one-punch.com/saitama.jpg';

    test('debe hacer match con el snapshot ', () => { 

        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
     })

     test('debe de mostrar la imagen con el URL y el ALT indicado en la imagen', () => { 
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        expect(screen.getByRole('img').alt).toBe(title);
      })

      test('debe de mostrar el titulo en el componente', () => { 
            render(<GifItem title={title} url={url} />);
            expect(screen.getByText(title)).toBeTruthy();
       })
 })