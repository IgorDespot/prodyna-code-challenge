import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';

import { PostService } from '../entities/post/post.service';

import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { AboutComponent } from '../pages/about/about.component';
import { PostEditComponent } from '../pages/posts/post-edit/post-edit.component';
import { SearchPipe } from './pipes/search-pipe.pipe';

@NgModule({
    declarations: [
        ErrorPageComponent,
        NavbarComponent,
        HomeComponent,
        PostsComponent,
        AboutComponent,
        PostEditComponent,
        SearchPipe,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RoutingModule,
        FormsModule,
    ],
    exports: [
        ErrorPageComponent,
        NavbarComponent,
        HomeComponent,
        PostsComponent,
        AboutComponent,
        PostEditComponent,
        SearchPipe,
    ],
    providers: [
        PostService
    ]
}) export class UtilModule { }
