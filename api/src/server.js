//const { crearTabla, cargarDatosExternos } = require('./services/pokemon.db.js');

import { crearTablaUsuarios } from './models/user.model.js';
import { createApp } from './app.js';
//import { connectPostgress } from './config/db.postgresql.js';

import { env } from './config/env.js';

(async () => {
 // await connectPostgress();
 


  await crearTablaUsuarios();
  const app = createApp();
  app.listen(env.PORT, () =>
    console.log('🚀 API lista en http://localhost: ',env.PORT)
  );
})();
