const db = require('../../data/db-config');

async function getRecipeById(id) {

    // {
    //     "recipe_name": "Spaghetti Bolognese",
    //     "steps": [
    //       {
    //         "step_number": 1,
    //         "step_instructions": "Put a large saucepan on a medium heat",
    //       },
    //       {
    //         "step_number": 2,
    //         "step_instructions": "Mix eggs and ham",
    //         "ingredients": [
    //           { "ingredient_id": 27, "quantity": 2 },
    //           { "ingredient_id": 48, "quantity": 0.1 }
    //         ]
    //       },
    //     ]
    //   }

    const recipeSteps = await db('recipes as rp')
    .where('rp.recipe_id', id)
    .leftJoin('steps as st', 'rp.recipe_id', 'st.recipe_id')
    .leftJoin('steps_ingredients as si', 'st.step_id', 'si.step_id')
    .leftJoin('ingredients as in', 'in.ingredient_id', 'si.ingredient_id')
    .select(
        'st.step_number', 
        'st.step_id',
        'instructions', 
        'rp.recipe_name', 
        'rp.recipe_id',
        'in.ingredient_id',
        'in.ingredient_name',
        'si.quantity' )
    .orderBy('st.step_number')

    // return recipeSteps;
    
   const result =  {
      recipe_id: recipeSteps[0].recipe_id,
      recipe_name: recipeSteps[0].recipe_name,
      steps: recipeSteps.reduce((acc, row) => {
                if (!row.ingredient_id) {
                    return acc.concat({
                        step_id: row.step_id,
                        step_number: row.step_number,
                        step_instructions: row.instructions,
                    })
                }
                if (row.ingredient_id && !acc.find(step => step.step_id === row.step_id)) {
                    return acc.concat({
                        step_id: row.step_id,
                        step_number: row.step_number,
                        step_instructions: row.instructions,
                        ingredients: [
                            {
                                ingredient_id: row.ingredient_id,
                                ingredient_name: row.ingredient_name,
                                quantity: row.quantity,
                            }
                        ]
                    })
                }
                const currentStep = acc.find(step => step.step_id === row.step_id)
                currentStep.ingredients.push({
                            ingredient_id: row.ingredient_id,
                            ingredient_name: row.ingredient_name,
                            quantity: row.quantity,
                })
                return acc
            }, [])
   }
      
//   recipeSteps.forEach(row => {
//     if (row.step_number) {
//       result.steps.push({ 
//         step_number: row.step_number, 
//         instructions: row.instructions,
//         ingredients: []
//       })
//     }
//   })



//   stepCombine.forEach(ingredient => {
//     if (ingredient.ingredient_id) {
        
//     }
// })
  
  return result
}

module.exports = {
    getRecipeById
}