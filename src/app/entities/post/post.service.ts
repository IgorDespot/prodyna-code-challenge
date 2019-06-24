import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './post.model';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    postCreated = new EventEmitter<Post>();

    private postsURL = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private httpClient: HttpClient) { }

    getAllPosts(page): Observable<Post[]> {
        return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
    }

    deletePost(id: number) {
        return this.httpClient.delete(this.postsURL + '/' + id);
    }

    postAdded(post: Post) {
      this.postCreated.emit(post);
    }

    createPost(post: Post) {
        console.log(post)
        return this.httpClient.post(this.postsURL, post);
    }
}
