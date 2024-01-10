import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { DetailRecipeComponent } from './detail-recipe/detail-recipe.component';
import { FormRecipeComponent } from './form-recipe/form-recipe.component';
import { HomeComponent } from './home/home.component';

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
                path: '',
                component: HomeComponent
            },
            {
                path: 'details/:id',
                component: DetailRecipeComponent
            },
            {
                path: 'new',
                component: FormRecipeComponent
            },
            {
                path: 'edit/:id',
                component: FormRecipeComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'recipe',
        pathMatch: 'full'
    }
    
];
