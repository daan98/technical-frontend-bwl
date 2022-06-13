import * as api from'../api';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.GetUsers();
        dispatch({ type: 'GET_ALL_USERS', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createUsers = (nombre, nombrecito, contraseña, correo, registro, logout, on) => async (dispatch) => { // pasamos la información de los campos que estan en el cuerpo
    try {
        const { data } = await api.CreateUser({nombre, nombrecito, contraseña, correo, registro, logout});
        dispatch({ type: 'CREATE_USER', payload: data });
        return Promise.resolve(data);
    } catch (error) {
        console.log(error.message);
    }
};

export const updateUser = (id, bodyData) => async (dispatch) => {
    try {
        const { data } = await api.UpdateUser(id, bodyData);
        dispatch({ type: 'UPDATE_USER', payload: data });
        return Promise.resolve(data);
    } catch (error) {
        console.log(error.message);
    }
}