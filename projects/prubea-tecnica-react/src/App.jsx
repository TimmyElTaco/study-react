import { useEffect, useState } from "react"

export function App() {

    const RANDOM_FACT_URL = 'https://catfact.ninja/fact'

    const [ fact, setFact ] = useState('lorem ipsum')
    const [ url, setUrl ] = useState()

    useEffect(() => {
        fetch(RANDOM_FACT_URL)
            .then(response => response.json())
            .then(data => {
                const { fact } = data;

                setFact(fact)
            })
    }, [])

    useEffect(() => {
        const firstWord = fact.split(' ')[0];

        fetch(`https://cataas.com/cat/says/${firstWord}?font=Impact&fontSize=30&fontColor=%23000&fontBackground=none&position=bottom&json=false`)
            .then(data => {
                console.log(data)
                const { url } = data;
                setUrl(url);
            })
    },[fact]);


    return (
        <main style={{
            display:'flex',
            flexDirection: 'column',
            placeItems: 'center'
        }}>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {url && <img src={`${url}`} alt={`image of a cat saying the first word of ${fact}`} style={{maxWidth:'400px'}} />}
        </main>
    )
}