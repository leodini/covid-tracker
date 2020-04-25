import axios from 'axios'

const api = axios.create({
    baseURL: 'https://covid19.mathdro.id/api/'
})

const fetchData = async() => {
    try{
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await api.get('')
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifiedData
    } catch(error) {
        console.log(error)
    }
}

export { fetchData }