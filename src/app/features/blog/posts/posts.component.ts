import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { FacadeAuthService } from '../../auth/facade-auth.service';
import { FacadeBlogService } from '../facade-blog.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from '../../../core/components/common/dynamic-form/dynamic-form.component';

export interface DynamicFormField {
  name: string;
  type: 'text' | 'textarea' | 'file';
  label: string;
  required?: boolean;
}

@Component({
  selector: 'app-posts',
  imports: [ReactiveFormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  

  facadeBlogService = inject(FacadeBlogService);
  fb = inject(FormBuilder)

  @ViewChild('formContentContainer',{
    read: ViewContainerRef,
    static: true
  })
  
  formContentContainer! : ViewContainerRef


  selectedImage: any;
  imageFileName: any;
  allPosts: any;

  ngOnInit(): void {
    this.showAllPosts();
  }

  showAllPosts(): void {
    this.facadeBlogService.showAllPosts().subscribe((allPosts:any)=>{
      console.log({allPosts});
      this.allPosts = allPosts;
    })
  }

  createPost(){


    let formContainerRef = this.formContentContainer.createComponent(DynamicFormComponent);

    const formConfig: DynamicFormField[] = [
      { name: 'title', type: 'text', label: 'Title', required: true },
      { name: 'subtitle', type: 'text', label: 'Subtitle' },
      { name: 'content', type: 'textarea', label: 'Content', required: true },
      { name: 'fileName', type: 'file', label: 'Image (optional)' }
    ];

    formContainerRef.instance.title = 'Create Post!';
    formContainerRef.instance.formConfig = formConfig ;

  }

}
