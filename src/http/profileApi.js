import {$host} from "./index";

export const getExecutorProfile = async () => {
    try {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"getExecutorProfile",
        token: token

    })
    localStorage.setItem('info', JSON.stringify(data.response.profile))
    return(data)
    } catch (e) {
        return(e.response.status)
    }
    
}

export const getCustomerProfile = async () => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"getCustomerProfile",
        token: token

    })
    localStorage.setItem('info', JSON.stringify(data.response.profile))
    return(data)
}

export const editProfile = async (pass, name, middleName, surname, birthday, gender,mail, phone) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"setProfile",
            pass,
            name, 
            middleName, 
            surname, 
            birthday, 
            gender:gender,
            mail,
            phone,
            token: token
        })

        localStorage.setItem('info', JSON.stringify(data.response.profile))
        localStorage.setItem('token', data.response.token)
        return(data.response)
    } catch(e) {
        return(e.response.status)
    }
}

export const editProfilePass = async (pass) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"setProfile",
            pass, 
            token: token
        })

        localStorage.setItem('info', JSON.stringify(data.response.profile))
        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const editProfileAbout = async (about, aboutSkills) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"setExecutorProfile", 
            token: token,
            "about": about,
            "aboutSkills":aboutSkills
        })

        localStorage.setItem('info', JSON.stringify(data.response.profile))
        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadImgProfile = async (nameImg, imgUsers) => {
    try {
        const token = localStorage.getItem('token')
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

export const postConfirmPhoneProfile = async (phone) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
           "action":"confirmPhone",
           phone,
           token: token
        })
        return(data)
    } catch(e) {
        return(e)
    }
}

export const confirmPhoneProfile = async (code) => {
    try {
        const token = localStorage.getItem('token')
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

export const setExecutorProfile = async (category,subCategory,typeExecutor,nameOrg,inn,regAddress,bankBik,bankAccount) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"setExecutorProfile", 
            "category": category,
            "subCategory": subCategory,
            "typeExecutor":typeExecutor,
            "nameOrg":nameOrg,
            "inn":inn,
            "regAddress":regAddress,
            "bankBik":bankBik,
            "bankAccount":bankAccount,
            "token": token,
        })

        localStorage.setItem('info', JSON.stringify(data.response.profile))
        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadExecutorDoc = async (nameImg,imgUsers,typeOfDoc) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"uploadExecutorDoc", 
            token: token,
            "name": nameImg,
            "dataFile":imgUsers,
            typeOfDoc: typeOfDoc
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadExecutorDoc2 = async (nameImg,imgUsers,typeOfDoc) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"uploadExecutorDoc", 
            token: token,
            "name": nameImg,
            "dataFile":imgUsers,
            typeOfDoc: typeOfDoc
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadExecutorDoc3 = async (nameImg,imgUsers,typeOfDoc) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"uploadExecutorDoc", 
            token: token,
            "name": nameImg,
            "dataFile":imgUsers,
            typeOfDoc: typeOfDoc
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadExecutorDoc4 = async (nameImg,imgUsers,typeOfDoc) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"uploadExecutorDoc", 
            token: token,
            "name": nameImg,
            "dataFile":imgUsers,
            typeOfDoc: typeOfDoc
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadExecutorDoc5 = async (nameImg,imgUsers,typeOfDoc) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"uploadExecutorDoc", 
            token: token,
            "name": nameImg,
            "dataFile":imgUsers,
            typeOfDoc: typeOfDoc
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const addExecutorPortfolio = async (nameProject,descriptionProject, selectedFile, preview, selectedFile2, preview2, selectedFile3, preview3) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"addExecutorPortfolio", 
            "nameProject":nameProject,
            "descriptionProject":descriptionProject, 
            "namePhoto1":selectedFile, 
            "photo1":preview,
            "namePhoto2":selectedFile2, 
            "photo2":preview2, 
            "namePhoto3":selectedFile3, 
            "photo3":preview3,
            token: token
        })
        

        return(data)
    } catch(e) {
        return(e)
    }
}

export const removeExecutorPortfolio = async (portfolioId) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"removeExecutorPortfolio", 
            "portfolioId":portfolioId,
            token: token
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const setExecutorPortfolio = async (portfolioId, nameProject,descriptionProject, selectedFile, preview, selectedFile2, preview2, selectedFile3, preview3) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"setExecutorPortfolio",
            "portfolioId":portfolioId, 
            "nameProject":nameProject,
            "descriptionProject":descriptionProject, 
            "namePhoto1":selectedFile, 
            "photo1":preview,
            "namePhoto2":selectedFile2, 
            "photo2":preview2, 
            "namePhoto3":selectedFile3, 
            "photo3":preview3,
            token: token
        })

        return(data)
    } catch(e) {
        return(e)
    }
}

export const addExecutorExperience = async (nameExperience, descriptionExperience,startExperience, endExperience) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"addExecutorExperience",
            "nameExperience":nameExperience, 
            "descriptionExperience":descriptionExperience,
            "startExperience":startExperience, 
            "endExperience":endExperience, 
            token: token
        })

        return(data)
    } catch(e) {
        return(e)
    }
}

export const setExecutorExperience = async (nameExperience, descriptionExperience,startExperience, endExperience,id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"setExecutorExperience",
            "nameExperience":nameExperience, 
            "descriptionExperience":descriptionExperience,
            "startExperience":startExperience, 
            "endExperience":endExperience, 
            token: token,
            "experienceId":id
        })

        return(data)
    } catch(e) {
        return(e)
    }
}

export const removeExecutorExperience = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"removeExecutorExperience",
            token: token,
            "experienceId":id
        })

        return(data)
    } catch(e) {
        return(e)
    }
}

export const addExecutorEducation = async (nameExperience, descriptionExperience,startExperience, endExperience) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"addExecutorEducation",
            "nameEducation":nameExperience, 
            "descriptionEducation":descriptionExperience,
            "startEducation":startExperience, 
            "endEducation":endExperience, 
            token: token
        })

        return(data)
    } catch(e) {
        return(e)
    }
}

export const setExecutorEducation = async (nameEducation, descriptionEducation,startEducation, endEducation,id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"setExecutorEducation",
            "nameEducation":nameEducation, 
            "descriptionEducation":descriptionEducation,
            "startEducation":startEducation, 
            "endEducation":endEducation, 
            token: token,
            "educationId":id,
        })

        return(data)
    } catch(e) {
        return(e)
    }
}

export const removeExecutorEducation = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"removeExecutorEducation",
            "educationId":id,
            token: token,
        })

        return(data)
    } catch(e) {
        return(e)
    }
}

export const setCustomerProfile = async (typeExecutor,nameOrg,inn,regAddress,bankBik,bankAccount) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"setCustomerProfile", 
            token: token,
            "typeExecutor":typeExecutor,
            "nameOrg":nameOrg,
            "inn":inn,
            "regAddress":regAddress,
            "bankBik":bankBik,
            "bankAccount":bankAccount
        })

        localStorage.setItem('info', JSON.stringify(data.response.profile))
        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadCustomerDoc = async (nameImg,imgUsers,typeOfDoc) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"uploadCustomerDoc", 
            token: token,
            "name": nameImg,
            "dataFile":imgUsers,
            "typeOfDoc": typeOfDoc
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadCustomerDoc2 = async (nameImg,imgUsers,typeOfDoc) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"uploadCustomerDoc", 
            token: token,
            "name": nameImg,
            "dataFile":imgUsers,
            "typeOfDoc": typeOfDoc
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadCustomerDoc3 = async (nameImg,imgUsers,typeOfDoc) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"uploadCustomerDoc", 
            token: token,
            "name": nameImg,
            "dataFile":imgUsers,
            "typeOfDoc": typeOfDoc
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadCustomerDoc4 = async (nameImg,imgUsers,typeOfDoc) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"uploadCustomerDoc", 
            token: token,
            "name": nameImg,
            "dataFile":imgUsers,
            "typeOfDoc": typeOfDoc
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const uploadCustomerDoc5 = async (nameImg,imgUsers,typeOfDoc) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
            "action":"uploadCustomerDoc", 
            token: token,
            "name": nameImg,
            "dataFile":imgUsers,
            "typeOfDoc": typeOfDoc
        })

        return(data.response)
    } catch(e) {
        return(e)
    }
}

export const postConfirmEmailProfile = async (email) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
           "action":"confirmMail",
            mail: email,
            token: token,
        })
        localStorage.setItem('info', JSON.stringify(data.response.profile))

        return(data)
    } catch(e) {
        return(e)
    }
}

export const confirmEmailProfile = async (code) => {
    try {
        const token = localStorage.getItem('token')
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

export const getEvents = async () => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('/', {
           "action":"getEvents",
            token: token
        })
        localStorage.setItem('info', JSON.stringify(data.response.profile))
        return(data)
    } catch(e) {
        return(e)
    }
}
