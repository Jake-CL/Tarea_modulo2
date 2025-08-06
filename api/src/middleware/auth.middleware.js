import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { User } from '../models/user.model.js'; // Sequelize model

export async function authverify(req, res, next) {
  const header = req.headers.authorization || '';
  console.log("headers", req.headers);
  console.log("header", header);

  // Extraer token (asegúrate de que haya espacio después de 'Bearer')
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: 'Token Requerido' });
  }

  try {
    // Verificar el token JWT
    const { sub } = jwt.verify(token, env.JWT_SECRET_KEY);

    // Buscar usuario por primary key (id)
    const user = await User.findByPk(sub);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Adjuntar usuario al request para uso posterior
    req.user = user;

    next();
  } catch (error) {
    console.error('Error en authverify:', error);
    return res.status(401).json({ message: 'Token Inválido' });
  }
}