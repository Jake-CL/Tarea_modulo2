import { PokemonRepository } from '../repositories/pokemon.repository.js';
import { Pokemon } from '../models/pokemon.model.js';
export const PokemonService = {
  create: async (data) => {
    return await Pokemon.create(data);
  },

  findAll: async () => {
    return await Pokemon.findAll();
  },

  findById: async (id) => {
    return await Pokemon.findByPk(id);
  },

  update: async (id, data) => {
    const [rows, [updated]] = await Pokemon.update(data, {
      where: { id },
      returning: true,
    });
    return updated;
  },

  remove: async (id) => {
    return await Pokemon.destroy({ where: { id } });
  },
};