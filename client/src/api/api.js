import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:3001/',
})

const API = {
    fetchHeroes: async (data) => {
        const res = await instance.get(`heroes?page=${data.pageNumber}&count=${data.pageSize}`)
        return res.data
    },
    getHero: async (id) => {
        const res = await instance.get(`hero/${id}`)
        return res.data
    },
    updateHeroData: async (data) => {
        const res = await instance.put(`hero/${data.id}`, data.info)
        return res.data
    },
    deleteHero: async (id) => {
        const res = await instance.delete(`hero/${id}`)
        return res.data
    },
    deleteImages: async (data) => {
        const res = await instance.delete(`hero/images/${data.id}`, {data: data.images})
        return res.data
    },
    addImage: async (data) => {
        await instance.put(`hero/images/${data.id}`, {image: data.image} )
    },
    createHero: async (data) => {
        const res = await instance.post(`hero`,  data )
        return res.data
    },
}

export default API