import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../model/recipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailRecipeComponent } from '../detail-recipe/detail-recipe.component';
import { Router } from '@angular/router';

@Component({
  selector: 'list-recipe',
  standalone: true,
  imports: [CommonModule, RouterModule, DetailRecipeComponent],
  templateUrl: './list-recipe.component.html',
  styleUrl: './list-recipe.component.css'
})
export class ListRecipeComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { 
    
    
  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
