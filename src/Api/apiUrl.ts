export function getRootApiUrl() {
    return process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_URL}/api` : 'http://localhost:3003/api';
}

export function getApiUsersList() {
    return `${getRootApiUrl()}/users`;
}

export function getApiConnectedUser() {
    return `${getApiUsersList()}/me`;
}

export function getApiLogin() {
    return `${getRootApiUrl()}/login`;
}

export function getApiConversationSeen() {
    return `${getApiUsersList()}/conversation-seen`;
}

export function getApiConversations() {
    return`${getRootApiUrl()}/messages`;
}
