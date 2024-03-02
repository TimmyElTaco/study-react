import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

export function App() {

    const { fact, getFact } = useCatFact();
    const { urlImage } = useCatImage({ fact });
    
    async function handleClick() { 
        getFact();
    }

    return (
        <main style={{
            display:'flex',
            flexDirection: 'column',
            placeItems: 'center'
        }}>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get random fact</button>
            {fact && <p>{fact}</p>}
            {urlImage && <img src={`${urlImage}`} alt={`image of a cat saying the first word of ${fact}`} style={{maxWidth:'400px'}} />}
        </main>
    )
}