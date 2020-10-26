import axios from 'axios'

const getBreeds = async () => {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds')
    return response.data
}

export default { getBreeds }