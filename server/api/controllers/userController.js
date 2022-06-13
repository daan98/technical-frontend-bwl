const { UserModel } = require('../models');

const getUsers = async (req, res) => {
    try {
        const user = await UserModel.find({});
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findById(id);
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createUser = async (req, res) => {
    const newUser = new UserModel(req.body);
    const users = await UserModel.find({ nombre: newUser.nombre }).exec();

    try {
        if(users.some(user => user.nombre === newUser.nombre )){
            throw new Error("Este usuario ya tiene cuenta, registrese con otro nombre y correo");
        } else{
            await newUser.save();
            res.send(newUser);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    const { params: { id }, body } = req;

    try {
        if(body.nombre === '' || body.nombrecito === '' || body.contraseña === '' || body.correo === '' || body.registro === '' || body.logout === ''){
            throw new Error('There is empty data. Please fill everything.');
        } else{
            const user = await UserModel.findByIdAndUpdate(id, body);
            res.send(body);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
}