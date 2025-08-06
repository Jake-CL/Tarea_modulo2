import { crearTabla, cargarDatosExternos } from '../src/models/pokemon.model.js';
import {  crearTablaUsuarios, cargarPrimerUsuario } from '../src/models/user.model.js';
async function seed() {
  try {
    // Crear tabla si no existe
     await crearTabla();
     await cargarDatosExternos();
     await crearTablaUsuarios();
     await cargarPrimerUsuario();
    

    process.exit(0);
  } catch (error) {
    console.error('Error en seed:', error);
    process.exit(1);
  }
}

seed();
