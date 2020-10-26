import React from 'react'
import { Select } from 'semantic-ui-react'

const BreedSelect = ({ breeds, onChange }) => {
  const breedOptions = breeds.map((breed) => ({ key: breed.id, text: breed.name, value: breed.id }))
  console.log(breedOptions[0])
  return (
    <Select onChange={onChange} placeholder="select breed" options={breedOptions} selection fluid />
  )
}

export default BreedSelect