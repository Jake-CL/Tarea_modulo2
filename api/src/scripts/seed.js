// scripts/seed-150.js

import axios from 'axios';
import { sequelize } from '../config/sequelize.js';



async function seed() {
  try {
     async function crearTabla() {
  await Pokemon.sync();
  console.log('Tabla Pokemon creada o ya existe');
}

 async function cargarDatosExternos() {
  const count = await Pokemon.count();
  if (count > 0) {
    console.log('Tabla Pokemon no esta vacia. No se insertaron Pokemones.');
    return;
  }

  console.log('Espere se están cargando datos...');
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=1&limit=150');
  const datos = response.data.results;

  let countInsertados = 0;

  for (const item of datos) {
    const response1 = await axios.get(item.url);
    const pokemonDetails = response1.data;

    const attacks = pokemonDetails.moves.map(m => m.move.name);

    await Pokemon.create({
      name: item.name,
      weight: pokemonDetails.weight,
      attacks,
    });

    countInsertados++;
  }

  console.log(`Datos cargados con éxito. Total: ${countInsertados}`);
}
    
  } catch (error) {
    console.error('Error en seed:', error);
    process.exit(1);
  }
}

seed();