import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    {
        "id": 1,
        "name": "Portuguese Food",
        "description": "Delicious beef sandwiches",
        "imageUrl": "https://www.portugalist.com/wp-content/uploads/prego.jpg"
    }, 
    {
        "id": 2,
        "name": "South African Food",
        "description": "Delicious !!!",
        "imageUrl": "https://kreatiewekosidees.files.wordpress.com/2013/08/shepards-pie.jpg"
    }
];

  constructor(private http: HttpClient) { 
    
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number): any {
    return this.recipes.find(recipe => recipe.id === id);
  }

  addRecipe(recipe: Recipe) {
    let latestId = this.recipes[this.recipes.length - 1].id;
    recipe.id = latestId + 1;

    this.recipes.push(recipe);
  }

  findIndexOfRecipe(id: number) {
    return this.recipes.findIndex(recipe => recipe.id === id);
  }

  updateRecipe(id: number, recipe: Recipe) {
    let index = this.findIndexOfRecipe(id);
    recipe.id = id;
    this.recipes[index] = recipe;
  }

  deleteRecipe(id: number) {
    let index = this.findIndexOfRecipe(id);
    this.recipes.splice(index, 1);
  }
}
