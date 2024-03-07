import api from "./interceptor"


export const registerAction = async (formData) => {
   return await api.post("/api/auth/register", formData)
}