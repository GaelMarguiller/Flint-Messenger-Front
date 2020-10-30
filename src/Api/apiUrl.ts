export function getRootApiUrl() {
    return `${process.env.REACT_APP_API_URL}/api`
}

export function getApiUsersList() {
    return `${getRootApiUrl()}/users`
}

export function getApiConnectedUser() {
    return `${getApiUsersList()}/me`
}

export function getApiLogin() {
    return `${getRootApiUrl()}/login`
}

export function getApiConversationSeen() {
    return `${getApiUsersList()}/conversation-seen`
}
