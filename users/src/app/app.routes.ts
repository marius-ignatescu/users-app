import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => {
            return import ('./home/home').then((m) => m.Home);
        },
    },
    {
        path: 'user',
        loadComponent: () => {
            return import ('./user/user-list').then((m) => m.User);
        },
    },
    {
        path: 'add-user',
        loadComponent: () => {
            return import ('./user/add-user/add-user').then((m) => m.AddUser);
        },
    },
    {
        path: 'user/:id',
        loadComponent: () => {
            return import ('./user/user-details/user-details').then((m) => m.UserDetails);
        },
    },
    {
        path: 'settings',
        loadComponent: () => {
            return import ('./settings/settings').then((m) => m.Settings);
        },
    }
];
