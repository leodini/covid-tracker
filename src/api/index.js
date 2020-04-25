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

const fetchDailyData = async() => {
    try {
        const { data } = await api.get('daily')

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        
        return modifiedData
    } catch(error) {
        console.log(error)
    }
}

export { fetchData, fetchDailyData }