import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Angular Components', text: 'Learn', id: 1 },
    { title: 'Next step', text: 'Directives', id: 2 },
  ]

  updatePosts(post: Post) {
    console.log('Post', post)
    this.posts.unshift(post)
  }
}
