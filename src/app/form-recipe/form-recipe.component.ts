import { Component, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipeService } from '../service/recipe.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-recipe',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form-recipe.component.html',
  styleUrl: './form-recipe.component.css'
})
export class FormRecipeComponent implements OnChanges{
  recipeForm: FormGroup;
  mode: string = 'NEW';
  id: number = 1;
  
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
    this.recipeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('',Validators.required),
      imageUrl: new FormControl('', Validators.required)
    });

    if (this.router.url.includes('edit')) {
      this.mode = 'EDIT';

      this.route.paramMap.subscribe(params => {
        this.id = Number(params.get('id'));
      });
      this.recipeForm.patchValue(this.recipeService.getRecipe(this.id));
    }
  }

  ngOnChanges() {
    
  }

  submitForm() {
    if (this.mode === 'NEW') {
      this.recipeService.addRecipe(this.recipeForm.value);
    } else {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      this.router.navigate(['/recipe/details', this.id])
    }
  }
}
