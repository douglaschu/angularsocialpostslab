import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() posts: Post[];

  @Output() deleted = new EventEmitter<object>();
  deletePost = (post: Post) => {
    this.deleted.emit(post);
    //original code from lab submission, using delete method from previous project. Causes bug 
    //this.posts = this.posts.filter( t => t.title !== post.title );
  };

  constructor() { }

  ngOnInit(): void {
  }

  

}
