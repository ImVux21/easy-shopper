import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) { 
    
  }

  getRecipes() {
    return this.http.get('assets/recipes.json');
  }
}
