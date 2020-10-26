
import React, { useState, useEffect } from 'react'
import catService from './service/catService'
import CatList from './Components/CatList'
import breedService from './service/breedService'
import BreedSelect from './Components/Breeds'


const App = () => {
  const [cats, setCats] = useState([])
  const [breeds, setBreeds] = useState([])

  const handleOnChange = async (event, data) => {
    const newCats = await catService.getCatsByBreed(data.value)
    console.log(newCats)
    setCats(newCats)
  }

  useEffect(() => {
    breedService
      .getBreeds()
      .then(breedData => {
        setBreeds(breedData)
      })

  }, [])


  useEffect(() => {
    catService
      .getAllCats()
      .then(catData => {
        setCats(catData)

      })
  }, [])

  return (
    <div>
      <h1>Cat Heaven</h1>
      <BreedSelect onChange={handleOnChange} breeds={breeds} />
      <CatList cats={cats} />
    </div>
  )
}

export default App