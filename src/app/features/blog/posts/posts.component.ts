import { Component, inject } from '@angular/core';
import { FacadeAuthService } from '../../auth/facade-auth.service';
import { FacadeBlogService } from '../facade-blog.service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  facadeBlogService = inject(FacadeBlogService);
  selectedImage: any;
  imageFileName: any;


  ngOnInit(): void {
    this.showAllPosts();
  }

  onImageSelected(event: any) {
    console.log({event})
    this.selectedImage = event.target.files[0];
    console.log('Image:',this.selectedImage);
  }

  showAllPosts(): void {
    this.facadeBlogService.showAllPosts().subscribe((allPosts:any)=>{
      console.log({allPosts});
    })
  }

  imageUpload() {
    const formData = new FormData();

    formData.append('image',this.selectedImage);

    this.facadeBlogService.uploadImage(formData).subscribe((response:any)=>{
      console.log({response});
      this.imageFileName = response.filename ;
    })

  }  
  
  cretePost() {
    let post = {
      userId : 'new',
      title : 'new',
      subtile : 'new',
      date : new Date(),
      image : this.imageFileName
    }

    this.facadeBlogService.createPost(post).subscribe((response:any)=>{
      console.log({response});
    })

  }

}
