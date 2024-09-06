import axios from "axios";

const $host = axios.create({
    baseURL: "http://194.67.113.55/api.php"
})

const $authHost = axios.create({
    baseURL: "http://194.67.113.55/api.php"
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
