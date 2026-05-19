import axios from "axios";

//define a porta onde a API local está rodando
const apiPort = "3000"

//define o endereço/endpoint da API local
const localApi = `http://localhost:${apiPort}`

//define o endereço para APIs externas
const externaApi = null

//cria o onjeto do axios com a URL base apontando para a API local
const api = axios.create({
    baseURL: localApi
})

export default api

