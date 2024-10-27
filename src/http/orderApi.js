import {$host} from "./index";

export const getOrderList = async (filterTypePlace,filterTypeOrder,city,filterCategory,filterStartCost,filterEndCost,filterFindKeyword,value) => {
    try {
        console.log(filterTypePlace,filterTypeOrder,city,filterCategory,filterStartCost,filterEndCost,filterFindKeyword,value)
        const {data} = await $host.post('', {
            "action":"getOrderList",
            "filterTypePlace":filterTypePlace,
            "filterTypeOrder":filterTypeOrder,
            "filterCity":city,
            "filterCategory":filterCategory,
            "filterStartCost":filterStartCost,
            "filterEndCost": filterEndCost,
            "filterFindKeyword": filterFindKeyword,
            "filterSort":value,
        })
        console.log(data.response.order)
        return(data.response.order)
    } catch(e) {
        return e
    }
}

export const viewOrder = async (id) => {
    try {
         const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"viewOrder",
            "orderId":id,
            token: token,
        })
        console.log(data.response)
        return(data.response)
    } catch(e) {
        return(e.response.status)
    }
   
}

export const deletePhoto = async (idFile,id) => {
    try {
         const token = localStorage.getItem('token')
         console.log(idFile,id)
        const {data} = await $host.post('', {
            "action":"removeOrderFile",
            "idFile":idFile,
            "orderId":id,
            token: token,
        })
        console.log(data.response)
        return(data.response)
    } catch(e) {
        return(e.response.status)
    }
   
}

export const addOrder = async (name, category, typeOrder,subCategory, typePlace,city,addressPlace,typeDate,startDate,endDate,startCost,endCost,typePayments,needAgreement,needCloseDocuments,needInsurance,needCredit,description,time) => {
    const token = localStorage.getItem('token')
    console.log(name, category, typeOrder,subCategory, typePlace,city,addressPlace,typeDate,startDate,endDate,startCost,endCost,typePayments,needAgreement,needCloseDocuments,needInsurance,needCredit,description,time)
    const {data} = await $host.post('', {
        "action":"addOrder",
        "name":name,
        "category":category,
        "typeOrder":typeOrder,
        "subCategory":subCategory,
        "typePlace":typePlace,
        "city":city,
        "addressPlace":addressPlace,
        "typeDate":typeDate,
        "startDate":startDate,
        "endDate":endDate,
        "startCost":startCost,
        "endCost":endCost,
        "typePayments":typePayments,
        "needAgreement":needAgreement,
        "needCloseDocuments":needCloseDocuments,
        "needInsurance":needInsurance,
        "needCredit":needCredit,
        "description":description,
        "documents":time,
        token: token,
    })
    console.log(data)
    return(data)
}

export const setOrder = async (id, name, category, typeOrder,subCategory, typePlace,city,addressPlace,typeDate,startDate,endDate,startCost,endCost,typePayments,needAgreement,needCloseDocuments,needInsurance,needCredit,description,files) => {
    console.log(id, name, category, typeOrder,subCategory, typePlace,city,addressPlace,typeDate,startDate,endDate,startCost,endCost,typePayments,needAgreement,needCloseDocuments,needInsurance,needCredit,description,files)
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"setOrder",
        "orderId":id,
        "name":name,
        "category":category,
        "typeOrder":typeOrder,
        "subCategory":subCategory,
        "typePlace":typePlace,
        "city":city,
        "addressPlace":addressPlace,
        "typeDate":typeDate,
        "startDate":startDate,
        "endDate":endDate,
        "startCost":startCost,
        "endCost":endCost,
        "typePayments":typePayments,
        "needAgreement":needAgreement,
        "needCloseDocuments":needCloseDocuments,
        "needInsurance":needInsurance,
        "needCredit":needCredit,
        "description":description,
        "documents":files,
        token: token,
    })
    console.log(data)
    return(data)
}

export const setOrderPhoto = async (id,files) => {
    console.log(id, files)
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"setOrder",
        "orderId":id,
        "documents":files,
        token: token,
    })
    console.log(data)
    return(data)
}

export const getMyOrders = async () => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"getMyOrders",
        token: token,
    })
    console.log(data.response)
    return(data.response)
}

export const setCloseOrder = async (id) => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"setCloseOrder",
        "orderId":id,
        token: token,
    })
    console.log(data.response)
    return(data.response)
}

export const setPublicOrder = async (id) => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"setPublicOrder",
        "orderId":id,
        token: token,
    })
    console.log(data.response)
    return(data.response)
}

export const setReactionOrder = async (id, price, description) => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"setReactionOrder",
        "orderId":id,
        "executorCost":price, 
        "executorText":description, 
        token: token,
    })
    console.log(data.response)
    return(data.response)
}

export const setOrderExecutor = async (id, profileId) => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"setOrderExecutor",
        "orderId":id,
        "profileId":profileId, 
        token: token,
    })
    console.log(data.response)
    return(data.response)
}

export const offerOrder = async (id, profileId) => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"offerOrder",
        "orderId":id,
        "profileId":profileId, 
        token: token,
    })
    console.log(data.response)
    return(data.response)
}

export const setAcceptOrder = async (id) => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"setAcceptOrder",
        "orderId":id,
        token: token,
    })
    console.log(data.response)
    return(data.response)
}

export const setExecutorCompleteOrder = async (id) => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"setExecutorCompleteOrder",
        "orderId":id,
        token: token,
    })
    console.log(data.response)
    return(data.response)
}

export const setDisputeOrder = async (id) => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"setDisputeOrder",
        "orderId":id,
        token: token,
    })
    console.log(data.response)
    return(data.response)
}

export const setFeedbackOrder = async (rate, feedback, id) => {
    const token = localStorage.getItem('token')
    const {data} = await $host.post('', {
        "action":"setFeedbackOrder",
        'rate': rate,
        "feedback": feedback,
        "orderId":id,
        token: token,
    })
    console.log(data.response)
    return(data.response)
}