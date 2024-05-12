import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users.filter(u => true)
}

export const getUsersSuper = createSelector(() => {
    
})

export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}