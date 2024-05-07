import api from "./interceptor"


export const registerAction = async (formData) => {
   return await api.post("/api/auth/register", formData)
}
export const loginAction = async (formData) => {
   return await api.post("/api/auth/login", formData)
}
export const googleAuth = async(result) => {
   return await api.post("api/auth/google", 
   JSON.stringify({name:result.user.displayName, email: result.user.email, photo: result.user.photoUrl})
   )
}