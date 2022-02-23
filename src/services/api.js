import axios from 'axios'

const BASE = 'https://jsonplaceholder.typicode.com'



export const api = {
    getAlbuns: async () => {
        let response = await axios.get(`${BASE}/albums`)
        console.log(response)

        return response.data
    }
}