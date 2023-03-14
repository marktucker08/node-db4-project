/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes_ingredients').del()
  await knex('recipes_ingredients').insert([
    {ingredient_id: 1, recipe_id: 1, quantity: 1},
    {ingredient_id: 1, recipe_id: 2, quantity: 1},
    {ingredient_id: 1, recipe_id: 3, quantity: 1},
    {ingredient_id: 2, recipe_id: 1, quantity: 1},
    {ingredient_id: 2, recipe_id: 2, quantity: 1},
    {ingredient_id: 2, recipe_id: 3, quantity: 1},
    {ingredient_id: 3, recipe_id: 1, quantity: 0.3},
    {ingredient_id: 3, recipe_id: 1, quantity: 0.1},
    {ingredient_id: 3, recipe_id: 1, quantity: 0.6},
    {ingredient_id: 4, recipe_id: 1, quantity: 1},
    {ingredient_id: 4, recipe_id: 2, quantity: 1},
    {ingredient_id: 4, recipe_id: 3, quantity: 1},
    {ingredient_id: 5, recipe_id: 1, quantity: 1},
    {ingredient_id: 5, recipe_id: 2, quantity: 1},
    {ingredient_id: 5, recipe_id: 3, quantity: 1},
    {ingredient_id: 6, recipe_id: 1, quantity: 10},
    {ingredient_id: 6, recipe_id: 2, quantity: 9},
    {ingredient_id: 6, recipe_id: 3, quantity: 11},
    {ingredient_id: 7, recipe_id: 1, quantity: 0.2},
    {ingredient_id: 7, recipe_id: 2, quantity: 0.1},
    {ingredient_id: 7, recipe_id: 3, quantity: 0.1},
    {ingredient_id: 8, recipe_id: 1, quantity: 1},
    {ingredient_id: 8, recipe_id: 2, quantity: 1},
    {ingredient_id: 8, recipe_id: 3, quantity: 1},
    {ingredient_id: 9, recipe_id: 1, quantity: 1},
    {ingredient_id: 9, recipe_id: 2, quantity: 1},
    {ingredient_id: 9, recipe_id: 3, quantity: 1},
    {ingredient_id: 10, recipe_id: 1, quantity: 1},
    {ingredient_id: 10, recipe_id: 2, quantity: 1},
    {ingredient_id: 10, recipe_id: 3, quantity: 1},
    {ingredient_id: 11, recipe_id: 1, quantity: 0},
    {ingredient_id: 11, recipe_id: 2, quantity: 0},
    {ingredient_id: 11, recipe_id: 3, quantity: 1}
  ]);
};
