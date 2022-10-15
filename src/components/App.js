import React, { useState, useEffect } from "react";

function App(){
    const [dogImage, setDogImage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            setDogImage(data.message)
            setIsLoading(true)
        })
    }, [])

    if(!isLoading) return <p>Loading...</p>

    return <img src={dogImage} alt="A Random Dog" />
}

export default App