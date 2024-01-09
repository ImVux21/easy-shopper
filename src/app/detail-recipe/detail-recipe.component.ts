import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail-recipe',
  standalone: true,
  imports: [],
  templateUrl: './detail-recipe.component.html',
  styleUrl: './detail-recipe.component.css'
})
export class DetailRecipeComponent {
  constructor(private route: ActivatedRoute) { 

  }

  
}
