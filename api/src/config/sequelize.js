import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize( process.env.POSTGRESDB_DATABASE,process.env.POSTGRESDB_USER, process.env.POSTGRESDB_ROOT_PASSWORD, {
  host:  process.env.POSTGRESDB_HOST,
  dialect: 'postgres',    // <--- Aquí debes especificar el dialecto
      // Desactiva logs SQL (opcional)
});

//export default sequelize;
