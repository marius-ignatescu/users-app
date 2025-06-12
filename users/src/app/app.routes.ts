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
            return import ('./user/user').then((m) => m.User);
        },
    },
    {
        path: 'settings',
        loadComponent: () => {
            return import ('./settings/settings').then((m) => m.Settings);
        },
    }
];
