import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FacadeBlogService } from '../facade-blog.service';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {


  facadeBlogService = inject(FacadeBlogService)

  
  postForm = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
    content: new FormControl(''),
    fileName: new FormControl('')
})
  selectedImage: any;

onImageSelected(event: any) {
  console.log({event})
  this.selectedImage = event.target.files[0];
  console.log('Image:',this.selectedImage);
}

imageUpload() {
  const formData = new FormData();

  formData.append('image',this.selectedImage);

  this.facadeBlogService.uploadImage(formData).subscribe((response:any)=>{
    console.log({response});
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
