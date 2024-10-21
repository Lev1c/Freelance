import {$host} from "./index";

export const getWallet = async () => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getWallet", 
            token: token,
        })
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
        
}

export const getTariffs = async () => {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getTariffs", 
            token: token,
        })
        return(data.response)
}

export const payTariff = async (tariffId) => {
        const token = localStorage.getItem('token')
        console.log(tariffId)
        const {data} = await $host.post('', {
            "action":"payTariff", 
            "tariffId":tariffId,
            token: token,
        })
        return(data.response)
}
