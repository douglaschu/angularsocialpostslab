import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    {
      title: 'Children',
      thought: 'The face of a child can say it all, especially the mouth part of the face.'
    },
    {
      title: 'Trees',
      thought: 'If trees could scream, would we be so cavalier about cutting them down? We might, if they screamed all the time, for no good reason.'
    },
    {
      title: 'Wisdom',
      thought: "The wise man can pick up a grain of sand and envision a whole universe. But the stupid man will just lie down on some seaweed and roll around until he's completely draped in it. Then he'll stand up and go, 'Hey, I'm Vine Man.'"
    }
]

  

  onDelete = (el) => {
    this.posts.splice(this.posts.indexOf(el), 1);
  }

  isShow: boolean = false; 

  toggleDisplay = () => {
    this.isShow =! this.isShow;
  }

  onSubmit = (event: Post) => {
    this.toggleDisplay();
    this.posts.unshift(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
