const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre: {type: String, required: [true, 'nombre is required']},
    nombrecito: {type: String, required: [true, 'nombrecito is required']},
    contraseña: {type: String, required: [true, 'contraseña is required']},
    correo: {type: String, required: [true, 'correo is required']},
    registro: {type: String, required: [true, 'registro is required']},
    logout: {type: String, required: [true, 'logout is required']}
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;