export const signup = user => (
    $.ajax({
        url: "/api/users",
        method: "POST",
        data: { user } 
    })
)

export const login = user => (
    $.ajax({
        url: "/api/session",
        method: "POST",
        data: { user }
    })
)

export const logout = () => (
    $.ajax({
        url: "/api/session",
        method: "DELETE"
    })
)

export const getChannelMembers = channelId => (
    $.ajax({
        url:"/api/users",
        method: "GET",
        data: {
            channelId
        }
    })
)

export const getAllUsers = () => (
    $.ajax({
        url:"/api/users",
        method: "GET"
    })
)
