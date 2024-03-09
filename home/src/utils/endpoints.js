import api from "./interceptor"


export const registerAction = async (formData) => {
   return await api.post("/api/auth/register", formData)
}
export const loginAction = async (formData) => {
   return await api.post("/api/auth/login", formData)
}