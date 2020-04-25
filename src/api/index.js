import axios from 'axios'

const api = axios.create({
    baseURL: 'https://covid19.mathdro.id/api/'
})

const fetchData = async() => {
    try{
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await api.get('')
        return { confirmed, recovered, deaths, lastUpdate }
    } catch(error) {
        console.log(error)
    }
}

export { fetchData }