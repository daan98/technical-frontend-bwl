export default (users = [], action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            return action.payload;
        case 'CREATE_USER':
            return action.payload;     
        case 'GET_SINGLE_USER':
            return action.payload;
        case 'UPDATE_USER':
            return action.payload;
        default:
            return users;
    }
}