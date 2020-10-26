import axios from 'axios'

const getAllCats = async () => {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=50&page=1&order=Desc')
    return response.data
}

const getCatsByBreed = async (id) => {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=50&breed_ids=${id}`)
    return response.data
}

export default { getAllCats, getCatsByBreed }