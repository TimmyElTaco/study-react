import { useState, useEffect } from 'react'
import { getRandomFact } from "../utilitys/facts";

export function useCatFact() {
    const [ fact, setFact ] = useState('lorem ipsum')

    const getFact = () => {
        return getRandomFact().then(setFact);
    }
    useEffect(getFact, []);

    return { fact, getFact };
}