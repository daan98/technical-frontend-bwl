export default (users = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_ALL_USERS':
            return payload;

        case 'CREATE_USER':
            return [...users, payload];

        case 'GET_SINGLE_USER':
            return payload;

        case 'UPDATE_USER':
            return users.map( user => {
                if(user.id === payload.id) {
                    return {
                        ...user,
                        payload
                    };
                } else{
                    return user
                }
            });

        default:
            return users;
    }
}