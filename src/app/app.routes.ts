import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { DetailRecipeComponent } from './detail-recipe/detail-recipe.component';

export const routes: Routes = [
    
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'recipe',
        component: ListRecipeComponent,
        children: [
            {
                path: 'details/:id',
                component: DetailRecipeComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'recipe',
        pathMatch: 'full'
    }
    
];
