import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreBlogService {

  http = inject(HttpClient)

  constructor() { }


  showAllPosts(): Observable<any>{
    return this.http.get('http://localhost:3000/post/showallposts');
  }

  uploadImage(formData:any): Observable<any>{
    return this.http.post('http://localhost:3000/post/uploadImage',formData);
  }

  createPost(payload:any): Observable<any>{
    return this.http.post('http://localhost:3000/post/createPost',payload);
  }

}
