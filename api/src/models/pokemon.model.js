import axios from 'axios';
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js';


export const Pokemon = sequelize.define('pokedex_final', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  attacks: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
}, {
  tableName: 'pokedex_final', // nombre exacto de la tabla en la BD
  timestamps: true, // si no usas createdAt/updatedAt
});

export async function crearTabla() {
  await Pokemon.sync();
  console.log('Tabla Pokemon creada');
}

export async function cargarDatosExternos() {
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
//await Pokemon.sync();
/*import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';  // ruta a tu configuración



export const Pokemon = sequelize.define('pokedex_final', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  attacks: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  }
 
}, {
  tableName: 'pokedex_final',  // nombre exacto de la tabla en la BD
});*/

//await sequelize.sync();