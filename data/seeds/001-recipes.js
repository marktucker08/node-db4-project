/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {recipe_name: 'spaghetti with meatballs'},
    {recipe_name: 'mac n cheese'},
    {recipe_name: 'ramen noodles'}
  ]);
};
