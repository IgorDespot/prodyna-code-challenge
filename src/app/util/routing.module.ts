import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { PostEditComponent } from '../pages/posts/post-edit/post-edit.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'new-post', component: PostEditComponent },
    { path: 'about', component: AboutComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutingModule { }