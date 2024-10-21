import {$host} from "./index";

export const getExecutorList = async (search, filterSubCategory, filterCategory,filterCountFeedbackStart,filterCountFeedbackEnd,filterRate,filterCity, online) => {
    try {
        const {data} = await $host.post('', {
            "action":"getExecutorList", 
            "findKeyword": search,
            "filterSubCategory":filterSubCategory, 
            "filterCategory":filterCategory, 
            "filterCountFeedbackStart":filterCountFeedbackStart, 
            "filterCountFeedbackEnd":filterCountFeedbackEnd, 
            "filterRate":filterRate, 
            "filterCity":filterCity,
            "filterOnline": online
        })
        return(data.response.executorList)
    } catch(error) {
        return(error.response.status)
    }
}

export const viewExecutorProfile = async (id) => {
    try {
        const token = localStorage.getItem('token')
        
        const {data} = await $host.post('', {
            "action":"viewExecutorProfile",
            "profileId": id,
            token: token

        })
        
    return(data)
    } catch (e) {
        return(e.response.status)
    }
    
}

export const viewCustomerProfile = async (id) => {
    try {
        const token = localStorage.getItem('token')
        
        const {data} = await $host.post('', {
            "action":"viewCustomerProfile",
            "profileId": id,
            token: token

        })
        
    return(data)
    } catch (e) {
        return(e.response.status)
    }
    
}