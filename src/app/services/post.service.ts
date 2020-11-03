import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post: any){
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: HTMLInputElement){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(post: HTMLInputElement){
    return this.http.delete(this.url + '/' + post.id);
  }
}
