import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'detail-recipe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-recipe.component.html',
  styleUrl: './detail-recipe.component.css'
})
export class DetailRecipeComponent implements OnInit, OnChanges {
  recipe: Recipe | undefined;
  id: number = 1;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  ngOnChanges(): void {
    
  }

  ngAfterViewInit() {
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
  }
}
