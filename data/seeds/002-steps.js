/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').del()
  await knex('steps').insert([
    {step_number: 1, instructions: 'boil the pasta for 7 minutes', recipe_id: 1},
    {step_number: 2, instructions: 'cook meatballs', recipe_id: 1},
    {step_number: 3, instructions: 'drain pasta', recipe_id: 1},
    {step_number: 4, instructions: 'combine meatballs and sauce with pasta', recipe_id: 1},
    {step_number: 1, instructions: 'boil macaroni noodles', recipe_id: 2},
    {step_number: 2, instructions: 'drain noodles', recipe_id: 2},
    {step_number: 3, instructions: 'combine and mix cheese sauce with noodles', recipe_id: 2},
    {step_number: 1, instructions: 'boil the ramen noodles', recipe_id: 3},
    {step_number: 2, instructions: 'mix in ramen seasoning', recipe_id: 3},
    {step_number: 3, instructions: 'add hot sauce', recipe_id: 3}
  ]);
};
