/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {ingredient_name: 'spaghetti pasta'},
    {ingredient_name: 'macaroni noodles'},
    {ingredient_name: 'salt'},
    {ingredient_name: 'ramen seasoning'},
    {ingredient_name: 'tomato sauce'},
    {ingredient_name: 'meatballs'},
    {ingredient_name: 'oregano'},
    {ingredient_name: 'butter'},
    {ingredient_name: 'cheese sauce'},
    {ingredient_name: 'milk'},
    {ingredient_name: 'hot sauce'}
  ]);
};
