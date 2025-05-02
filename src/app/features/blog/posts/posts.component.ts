import { Component, inject } from '@angular/core';
import { FacadeAuthService } from '../../auth/facade-auth.service';
import { FacadeBlogService } from '../facade-blog.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [ReactiveFormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  facadeBlogService = inject(FacadeBlogService);
  fb = inject(FormBuilder)
  selectedImage: any;
  imageFileName: any;
  allPosts: any;


  postForm = new FormGroup({
      title: new FormControl(''),
      subtitle: new FormControl(''),
      content: new FormControl(''),
      fileName: new FormControl('')
  })

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
      this.allPosts = allPosts;
    })
  }

  imageUpload() {
    const formData = new FormData();

    formData.append('image',this.selectedImage);

    this.facadeBlogService.uploadImage(formData).subscribe((response:any)=>{
      console.log({response});
      this.imageFileName = response.filename ;
      this.postForm.patchValue({fileName: response.filename})
    })

  }  
  
  cretePost() {
    console.log("Form Values:",this.postForm.value);
    let post = {
      userId : 'new',
      title : this.postForm.value.title ,
      subtile : this.postForm.value.subtitle ,
      date : new Date(),
      image : this.postForm.value.fileName
    }

    this.facadeBlogService.createPost(post).subscribe((response:any)=>{
      console.log({response});
    })

  }

}
