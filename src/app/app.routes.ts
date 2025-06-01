import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { BooksPageComponent } from './pages/books/books.component';
import { ModifyPageComponent } from './pages/modify/modify.component';

export const routes: Routes = [
    {
        path:'',
        component: HomePageComponent
    },
    {
        path: 'inicio',
        component: HomePageComponent
    },
    {
        path: 'libros',
        component: BooksPageComponent
    },
    {
        path: 'modificar',
        component: ModifyPageComponent
    },
    {
        path: '**',
        redirectTo:''
    }
];
