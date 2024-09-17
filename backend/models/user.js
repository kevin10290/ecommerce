
import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  calle: String,
  ciudad: String,
  codigoPostal: String
});

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now },
  rol: { type: String, enum: ['cliente', 'admin'], default: 'cliente' },
  direcciones: [addressSchema]
});

const User = mongoose.model('User', userSchema);

export default User;
