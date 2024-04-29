import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4b9c7f01-7af5-4b75-addc-37f452dad9f7"
    }
})

export const usersAPI = {
    getUsers(pageSize = 50, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(responce => responce.data)
    }
}


export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`).then(responce => responce.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(responce => responce.data)
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,).then(responce => responce.data)
    }
}

export const profileAPI = {
    getProfileData(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(responce => {
                return responce.data
            })
    }
}