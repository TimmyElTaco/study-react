import { useEffect, useState } from "react"

export function useCatImage({ fact }) {
    const [ urlImage, setUrlImage ] = useState()

    if(!fact) return;

    const firstWord = fact.split(' ')[0];

    useEffect(() => {
        fetch(`https://cataas.com/cat/says/${firstWord}?font=Impact&fontSize=30&fontColor=%23000&fontBackground=none&position=bottom&json=false`)
            .then(response => {
                const { url } = response
                setUrlImage(url);
            });
    }, [fact])

    return { urlImage };
}
