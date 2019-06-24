import { Component, OnInit, HostListener } from '@angular/core';

import { PostService } from 'src/app/entities/post/post.service';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/entities/post/post.model';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'prodyna-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private postsSubscription: Subscription;
  fetchedPosts: Post[] = [];
  visible = -1;
  arrowIcon = 'fa fa-caret-square-o-down';
  isFetching = false;
  page = 1;

  constructor(
    private postService: PostService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.page = 1;
    this.isFetching = true;
    this.getPosts(1);
  }
  
  getPosts(page) {
    this.spinner.show();
    this.postsSubscription = this.postService.getAllPosts(page).subscribe(
      (resSuccess) => {
        this.isFetching = false;
        this.onSuccess(resSuccess);
        this.spinner.hide();
      },
      (resError) => {
        this.onError(resError);
      }
    );
  }

  checkPosts() {
    this.postService.postCreated.subscribe(post => {
      this.fetchedPosts.push(post);
    });
  }

  private onSuccess(data) {
    console.log(data)
    this.page += 1;
    this.fetchedPosts = data;
  }

  private onError(data) { }

  deletePost(postId, idx) {
    // simulation of deleting posts
    this.fetchedPosts.splice(idx, 1);
    // real delete with with service and HTTP DELETE method
    this.postService.deletePost(postId).subscribe(
      () => {
        this.onDeleteSuccess();
      },
      () => {
        this.onDeleteError();
      }
    );
  }

  private onDeleteSuccess() {
    // with real delete we need to refresh our list and we call again all list
    // this.getPosts();
  }

  private onDeleteError() { }

  onPostAdded(post) {
    // Would handle post adding for cross component
  }

  toggleContent(idx) {
    if (this.visible === idx) {
      this.visible = -1;
      this.arrowIcon = "fa fa-caret-square-o-down";
    } else {
      this.visible = idx;
      this.arrowIcon = "fa fa-caret-square-o-up";
    }
  }

  ngOnDestroy() {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  @HostListener('scroll', ['$event'])
  scrollHandle(event) {

    let pos = (event.target.scrollTop || event.target.scrollTop) + event.target.clientHeight;
    let max = event.target.scrollHeight;

    
    if(pos == max )   {
    this.postService.getAllPosts(this.page).subscribe((res: Post[]) => {
      this.page += 1;
      this.fetchedPosts.push(...res);
    })
    }
  }

}
