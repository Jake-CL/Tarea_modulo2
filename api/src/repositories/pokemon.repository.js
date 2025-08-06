import { Pokemon } from '../models/pokemon.model.js';

/*export const PokemonRepository = {
/*  create: (data) => Pokemon.create(data),
  findAll: () => Pokemon.find().lean(),
  findById: (id) => Pokemon.findById(id).lean(),
  update: (id, data) => Pokemon.findByIdAndUpdate(id, data, { new: true }).lean(),
  remove: (id) => Pokemon.findByIdAndDelete(id).lean(),
};*/
export const PokemonRepository = {
  create: (data) => Pokemon.create(data),

  findAll: () => Pokemon.findAll(),

  findById: (id) => Pokemon.findByPk(id),

  update: (id, data) =>
    Pokemon.update(data, { where: { id }, returning: true }).then(([rows, [updated]]) => updated),

  remove: (id) => Pokemon.destroy({ where: { id } }),
};