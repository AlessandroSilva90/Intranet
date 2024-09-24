import axios from "axios";

 const api = axios.create({
    baseURL:'http://minha_api/rota/'
})

export const snAviso = async () => {
    const docs = await api.get(`aviso`);
    return docs;
}