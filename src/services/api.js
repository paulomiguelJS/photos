import axios from 'axios'

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})


export const api = {
    getAlbums: async () => {
        const req = await request('/albums')
        return req.data
    },
    getAlbum: async (id) => {
        const req = await request(`/albums/${id}`)
        return req.data
    },
    getPhotos: async (id) => {
        const req = await request(`/albums/${id}/photos`)
        return req.data
    },
    getPhoto: async (id) => {
        const req = await request(`/photos/${id}`)
        return req.data
    }

}