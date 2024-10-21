import {$host} from "./index";

export const registration = async (login, pass) => {
    try {
        const {data} = await $host.post('/', {
            "action":"reg",
            login, 
            pass, 
        })
        
        if (data.response.token) {
            localStorage.setItem('acting_token', data.response.token)
        }
        
        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const registrationNext = async (name, middleName, surname, birthday, gender, listCountryId, listRegionId, listCityId,address,mail,phone) => {
    try {
        const token = localStorage.getItem('acting_token')
        const {data} = await $host.post('/', {
            "action":"setProfile",
            name, 
            middleName, 
            surname, 
            birthday, 
            gender:gender, 
            country:listCountryId, 
            region:listRegionId, 
            city:listCityId,
            address,
            mail,
            phone,
            token: token
        })
        
        localStorage.setItem('acting_token', data.response.token)
        localStorage.setItem('info', JSON.stringify(data.response.profile))
        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const getCountry = async () => {
    try {
        const {data} = await $host.post('/', {
            "action":"getCountry"
        })
        return(data.response.data)
    } catch(e) {
        return(e)
    }
}

export const getRegion = async (countryId) => {
    try {
        const {data} = await $host.post('/', {
            "action":"getRegion",
            "country": countryId
        })
        return(data.response.data)
    } catch(e) {
        return(e)
    }
}

export const getCity = async (regionId) => {
    try {
        const {data} = await $host.post('/', {
            "action":"getCity",
            "region": regionId
        })
        
        return(data.response.data)
    } catch(e) {
        return(e)
    }
}

export const getTaskCategories = async () => {
    try {
        const {data} = await $host.post('/', {
           "action":"getTaskCategories",
        })
        
        return(data.response.data)
    } catch(e) {
        return(e)
    }
}

export const findWork = async (word) => {
    try {
        const {data} = await $host.post('/', {
           "action":"getOrderList",
           "filterFindKeyword": word
        })
        
        return(data.response.order)
    } catch(e) {
        return(e)
    }
}



export const setExecutorProfileReg = async (category) => {
    try {
        const {data} = await $host.post('/', {
           "action":"setExecutorProfile",
           "category":category,
        })
        
        return(data.response.data)
    } catch(e) {
        return(e)
    }
}


export const uploadImg = async (nameImg, imgUsers) => {
    try {
        const token = localStorage.getItem('acting_token')
        const {data} = await $host.post('/', {
            "action":"setProfileAvatar",
            "name": nameImg,
            "dataFile":imgUsers,
            token: token
        })
        localStorage.setItem('info', JSON.stringify(data.response.profile))
        
        return(data)
    } catch(e) {
        return(e)
    }
}

export const postConfirmPhone = async (phone) => {
    
    try {
        const token = localStorage.getItem('acting_token')
        const {data} = await $host.post('/', {
           "action":"confirmPhone",
           token: token,
           phone
        })
        return(data)
    } catch(e) {
        return(e)
    }
}

export const confirmPhone = async (code) => {
    try {
        
        const token = localStorage.getItem('acting_token')
        const {data} = await $host.post('/', {
           "action":"confirmPhone",
            token: token,
            code: code
        })
        localStorage.setItem('info', JSON.stringify(data.response.profile))
        
        return(data)
    } catch(e) {
        return(e)
    }
}

export const postConfirmEmail = async () => {
    try {
        const token = localStorage.getItem('acting_token')
        const {data} = await $host.post('/', {
           "action":"confirmMail",
            token: token,
        })
        localStorage.setItem('info', JSON.stringify(data.response.profile))
        
        return(data)
    } catch(e) {
        return(e)
    }
}

export const confirmEmail = async (code) => {
    try {
        
        const token = localStorage.getItem('acting_token')
        const {data} = await $host.post('/', {
           "action":"confirmMail",
            token: token,
            code: code
        })
        localStorage.setItem('info', JSON.stringify(data.response.profile))
        
        return(data)
    } catch(e) {
        return(e)
    }
}

export const login = async (login, pass) => {
    const {data} = await $host.post('', {
        "action":"login",
        login, 
        pass,
    })
    localStorage.setItem('info', JSON.stringify(data.response.profile))
    
    return(data)
}

export const remindPassword = async (login) => {
    const {data} = await $host.post('', {
        "action":"remindPassword", 
        login
    })
    
    return(data)
}

export const updateT = async () => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"", 
        token: token
    })
    localStorage.setItem('token', data.response.token)
    localStorage.setItem('info', JSON.stringify(data.response.profile))
    
    return(data)
}

export const getCityByName = async (cityName) => {
    const {data} = await $host.post('', {
        "action":"getCityByName", 
        "cityName": cityName,
    })
    
    return(data)
}

export const getSubTaskCategories = async (id) => {
    const {data} = await $host.post('', {
        "action":"getSubTaskCategories", 
        "category":id
    })
    
    return(data)
}

export const getSubTaskCategoriesByName = async (subCategoryName) => {
    const {data} = await $host.post('', {
        "action":"getSubTaskCategoriesByName", 
        "subCategoryName":subCategoryName
    })
    
    return(data)
}

export const offerTaskCategories = async (text) => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"offerTaskCategories", 
        "name": text,
        token: token
    })
    
    return(data)
}
