/*const { connectPG } = require('./config/db.postgresql.js');

/*async function crearTabla() {
  await connectPG.connect();
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(100),
      email VARCHAR(100) UNIQUE NOT NULL,
      datos JSONB
    );
  `;
  await connectPG.query(query);
  console.log('Tabla creada');
  await connectPG.end();
}

crearTabla();*/
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js';
import bcrypt from 'bcrypt';

export const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'users', // nombre exacto de la tabla en la BD
  timestamps: true, // si no usas createdAt/updatedAt
});

export async function crearTablaUsuarios() {
  await User.sync();
  console.log('Tabla Usuarios creada');
}

export async function cargarPrimerUsuario() {
  const count = await User.count();
  if (count > 0) {
    console.log('Tabla Usuarios cargada.');
    return;
  }

  console.log('Espere se están cargando datos al primer usuario...');
    const hashed = await bcrypt.hash("tarea", 10);
   await User.create({
      username: "tarea1",
      email: "tarea@tarea.cl",
      password: hashed
    });

  console.log(`Usuario Cargado  con éxito.`);
}