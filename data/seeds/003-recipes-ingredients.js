/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps_ingredients').del()
  await knex('steps_ingredients').insert([
    {ingredient_id: 1, step_id: 1, quantity: 1},
    {ingredient_id: 1, step_id: 2, quantity: 1},
    {ingredient_id: 1, step_id: 4, quantity: 1},
    {ingredient_id: 2, step_id: 1, quantity: 1},
    {ingredient_id: 2, step_id: 2, quantity: 1},
    {ingredient_id: 2, step_id: 4, quantity: 1},
    {ingredient_id: 3, step_id: 1, quantity: 0.3},
    {ingredient_id: 3, step_id: 5, quantity: 0.1},
    {ingredient_id: 3, step_id: 8, quantity: 0.6},
    {ingredient_id: 4, step_id: 1, quantity: 1},
    {ingredient_id: 4, step_id: 2, quantity: 1},
    {ingredient_id: 4, step_id: 4, quantity: 1},
    {ingredient_id: 5, step_id: 1, quantity: 1},
    {ingredient_id: 5, step_id: 2, quantity: 1},
    {ingredient_id: 5, step_id: 4, quantity: 1},
    {ingredient_id: 6, step_id: 1, quantity: 10},
    {ingredient_id: 6, step_id: 2, quantity: 9},
    {ingredient_id: 6, step_id: 5, quantity: 11},
    {ingredient_id: 7, step_id: 1, quantity: 0.2},
    {ingredient_id: 7, step_id: 6, quantity: 0.1},
    {ingredient_id: 7, step_id: 7, quantity: 0.1},
    {ingredient_id: 8, step_id: 2, quantity: 1},
    {ingredient_id: 8, step_id: 4, quantity: 1},
    {ingredient_id: 8, step_id: 6, quantity: 1},
    {ingredient_id: 9, step_id: 9, quantity: 1},
    {ingredient_id: 9, step_id: 10, quantity: 1},
    {ingredient_id: 9, step_id: 8, quantity: 1},
    {ingredient_id: 10, step_id: 5, quantity: 1},
    {ingredient_id: 10, step_id: 6, quantity: 1},
    {ingredient_id: 10, step_id: 7, quantity: 1},
    {ingredient_id: 11, step_id: 4, quantity: 0},
    {ingredient_id: 11, step_id: 5, quantity: 0},
    {ingredient_id: 11, step_id: 9, quantity: 1}
  ]);
};
