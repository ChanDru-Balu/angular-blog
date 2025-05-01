import { inject, Injectable } from '@angular/core';
import { CoreBlogService } from '../../core/services/core-blog.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacadeBlogService {

  coreBlogService = inject(CoreBlogService);

  constructor() { }

  showAllPosts(): Observable<any> {
    
    return new Observable(observer=>{
      this.coreBlogService.showAllPosts().subscribe((allPosts:any)=>{

        observer.next(allPosts);
        observer.complete();

      })
    })
    
  }

  uploadImage(formData:any): Observable<any> {

    return new Observable(observer=>{
      this.coreBlogService.uploadImage(formData).subscribe((uploadedImageResponse:any)=>{
        observer.next(uploadedImageResponse);
        observer.complete();
      })
    })

  }

  createPost(payload:any): Observable<any>{
    return new Observable(observer=>{
      this.coreBlogService.createPost(payload).subscribe((response:any)=>{
        observer.next(response);
        observer.complete();
      })
    })
  }

}
