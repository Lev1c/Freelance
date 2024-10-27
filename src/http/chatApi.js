import {$host} from "./index";

export const getChatList = async () => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getChatList",
            token: token,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e.response.status)
    }
}

export const getChatMessages = async (chatId) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"getChatMessages",
            "chatId":chatId,
            token: token,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e)
    }
}

export const sendChatMessage = async (chatId,message) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"sendChatMessage",
            "chatId":chatId,
            "message": message,
            token: token,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e)
    }
}

export const sendChatFile = async (chatId,nameFile,dataFile) => {
    try {
        const token = localStorage.getItem('token')
        const {data} = await $host.post('', {
            "action":"sendChatFile",
            "chatId":chatId,
            "nameFile": nameFile,
            "dataFile": dataFile,
            token: token,
        })
        console.log(data)
        return(data.response)
    } catch (e) {
        return(e)
    }
}