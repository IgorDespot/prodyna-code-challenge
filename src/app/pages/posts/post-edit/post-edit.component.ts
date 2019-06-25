import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/entities/post/post.model';
import { NgForm } from '@angular/forms';
import {PostService} from '../../../entities/post/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  created = false;
  error = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.value.userId == 100) {
      this.error = true;
      form.reset();
      return;
    }
    this.postService.createPost(new Post(this.randomPostId(100, 150), form.value.userId, form.value.title, form.value.body))
    this.created = true;
    form.reset();
  }

  randomPostId(min, max) {
    const randomValue = min + (Math.random() * (max - min));
    return Math.round(randomValue);
  }

  closeAlert() {
    if (this.created) {
      this.created = false;
    } else {
      this.error = false;
    }
    
  }
}
