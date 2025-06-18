import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => {
            return import ('./pages/home/home').then((m) => m.Home);
        },
    },
    {
        path: 'user',
        loadComponent: () => {
            return import ('./pages/user/user-list').then((m) => m.User);
        },
    },
    {
        path: 'add-user',
        loadComponent: () => {
            return import ('./pages/user/add-user/add-user').then((m) => m.AddUser);
        },
    },
    {
        path: 'user/:id',
        loadComponent: () => {
            return import ('./pages/user/user-details/user-details').then((m) => m.UserDetails);
        },
    },
    {
        path: 'settings',
        loadComponent: () => {
            return import ('./pages/settings/settings').then((m) => m.Settings);
        },
    }
];
