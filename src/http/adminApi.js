import {$host} from "./index";

export const getAdminNotify = async () => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getAdminNotify",
            token: token,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}




export const getUsersAdm = async (search) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getUsers",
            token: token,
            "findKeyword": search
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setUserLock = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setUserLock",
            token: token,
            "userId": id
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setUserUnLock = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setUserUnLock",
            token: token,
            "userId": id
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setUserModeratorComment = async (text, id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setUserModeratorComment",
            token: token,
            "moderatorComment": text,
            "userId": id
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setUserSystemRole = async (id, ide) => {
    console.log(id, ide)
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setUserSystemRole",
            token: token,
            "userId": id,
            "systemRole": ide
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}




export const getCustomers = async (search) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getCustomers",
            token: token,
            "findKeyword": search
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setCustomerValidateAccount = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setCustomerValidateAccount",
            token: token,
            "profileId": id,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setCustomerModeratorComment = async (text, id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setCustomerModeratorComment",
            token: token,
            "moderatorComment": text,
            "profileId": id
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}



export const getExecutors = async (search) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getExecutors",
            token: token,
            "findKeyword": search
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setExecutorValidateAccount = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setExecutorValidateAccount",
            token: token,
            "profileId": id,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setExecutorModeratorComment = async (text, id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setExecutorModeratorComment",
            token: token,
            "moderatorComment": text,
            "profileId": id
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}



export const getCreditRequests = async (search) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getCreditRequests",
            token: token,
            "findKeyword": search
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const acceptCreditRequest = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"acceptCreditRequest",
            token: token,
            "orderId": id,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setOrderModeratorComment = async (text, id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setOrderModeratorComment",
            token: token,
            "moderatorComment": text,
            "orderId": id
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}



export const getInsuranceRequests = async (search) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getInsuranceRequests",
            token: token,
            "findKeyword": search
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const acceptInsuranceRequests = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"acceptInsuranceRequest",
            token: token,
            "orderId": id,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}



export const getArbitrageRequests = async (search) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getArbitrageRequests",
            token: token,
            "findKeyword": search
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const closeArbitrage = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"closeArbitrage",
            token: token,
            "orderId": id,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}


export const getSettings = async (search) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getSettings",
            token: token,
            "findKeyword": search
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setSettings = async (info) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setSettings",
            token: token,
            "settings": info,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}




export const getTaskCategoriesAdmin = async (search) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getTaskCategoriesAdmin",
            token: token,
            "findKeyword": search
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const setTaskCategoriesModerate = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"setTaskCategoriesModerate",
            token: token,
            "taskCategoriesId": id,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const removeTaskCategories = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"removeTaskCategories",
            token: token,
            "taskCategoriesId": id,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const changeTaskCategories = async (text, id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"changeTaskCategories",
            token: token,
            "name": text,
            "taskCategoriesId": id
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const addTaskCategories = async (text) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"addTaskCategories",
            token: token,
            "name": text,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}



export const getSubTaskCategoriesAdmin = async (id,search) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getSubTaskCategoriesAdmin",
            token: token,
            "taskCategoriesId": id,
            "findKeyword": search
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const addSubTaskCategories = async (text, id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"addSubTaskCategories",
            token: token,
            "name": text,
            "taskCategoriesId": id
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const changeSubTaskCategories = async (text, id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"changeSubTaskCategories",
            token: token,
            "name": text,
            "subTaskCategoriesId": id
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const removeSubTaskCategories = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"removeSubTaskCategories",
            token: token,
            "subTaskCategoriesId": id,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}