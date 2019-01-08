import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';


import {PanelComponent} from './components/panel/panel.component';
import {AboutComponent} from './components/about/about.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    {path: '', redirectTo: 'panel', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'panel', component: PanelComponent, canActivate: [AuthGuard]},
    {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
    {path: 'addbook', component: AddBookComponent, canActivate: [AuthGuard]},
    {path: 'books/:id', component: EditBookComponent, canActivate: [AuthGuard]},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
