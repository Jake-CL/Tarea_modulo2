import axios from 'axios';
import { Pokemon } from '../models/pokemon.model.js';


export async function crearTabla() {
  try {
    await Pokemon.sync(); // Crea la tabla si no existe
    console.log('Tabla pokedex_final creada o ya existe');
  } catch (error) {
    console.error('Error creando tabla:', error);
  }
}

export async function cargarDatosExternos() {
  try {
    // Verificar si la tabla ya tiene datos
    const count = await Pokemon.count();
    if (count > 0) {
      console.log('La tabla ya contiene datos. No se insertará nada.');
      return;
    }

    console.log('Espere, se están cargando datos...');
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=1&limit=1302');
    const datos = response.data.results;

    let countInsertados = 0;

    for (const item of datos) {
      const response1 = await axios.get(item.url);
      const pokemonDetails = response1.data;

      const attacks = pokemonDetails.moves.map(m => m.move.name);

      await Pokemon.create({
        name: item.name,
        url: item.url,
        weight: pokemonDetails.weight,
        attacks: attacks,
      });

      countInsertados++;
    }

    console.log(`Datos cargados con éxito. Total: ${countInsertados}`);
  } catch (error) {
    console.error('Error cargando datos externos:', error);
  }
}

export { crearTabla, cargarDatosExternos };
/*import { connectPostgress } from '../config/db.postgresql.js';
/*import  axios  from 'axios';


export async  function crearTabla() {
  const query = `
    CREATE TABLE IF NOT EXISTS pokedex_final (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      url VARCHAR(100),
      weight NUMERIC(10,2),
      attacks TEXT[]
    );
  `;
 
  await connectPostgress.query(query);
  //await connectPG.end();
}

//crearTabla();

export async  function cargarDatosExternos() {

 const { rows } = await connectPostgress.query('SELECT 1 FROM pokedex_final LIMIT 1');
  if (rows.length > 0) {
    console.log('Table is not empty. No data inserted.');
    return;
  }else{

  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=1&limit=1302');
  const datos = response.data.results;
  let count = 0;
console.log('Espere se estan cargando datos.');
  for (const item of datos) {
    const response1 = await axios.get(item.url);
    const pokemonDetails = response1.data;

    // Cambiar a arreglo para ataques (no string)
    const attacks = pokemonDetails.moves.map(m => m.move.name);

    await connectPostgress.query(
      'INSERT INTO pokedex_final (name, url, weight, attacks) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING',
      [item.name, item.url, pokemonDetails.weight, attacks]
    );
    count++;
  }
  }
 // return { message: 'Datos cargados', total: count };
}
*/
//module.exports = { crearTabla, cargarDatosExternos };
/*async function cargarDatosExternos() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=1&limit=1302');
  const datos = response.data.results;
  for (const item of datos) {
const response1 = await axios.get(item.url);
  const pokemonDetails = response1.data; // This is an object

  // Print name, weight, and all attack names (moves)
  const attacks = pokemonDetails.moves.map(m => m.move.name).join(', ');
/*
  console.log(
    "name:", item.name,
    "weight:", pokemonDetails.weight,
    "attacks:", attacks
  );*/


/*
    
    await connectPG.query(
      'INSERT INTO pokemon (name, url,weight,attacks) VALUES ($1,$2,$3,ARRAY[$4]) ON CONFLICT DO NOTHING',
      [item.name, item.url,pokemonDetails.weight,attacks]
    );
  }
  // Do NOT call connectPG.end() here
}

cargarDatosExternos()
  .then(() => console.log('Datos cargados'))
  .catch(err => console.error('Error cargando datos:', err));*/
