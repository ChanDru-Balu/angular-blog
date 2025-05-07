import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {


  fb = inject(FormBuilder);

  @Input() title : string = 'title';
  @Input() formConfig : any[] = [];


  form : FormGroup = this.fb.group({});

  ngOnInit(){
    console.log("Form Config:",this.formConfig);
    const group : any = {};
    this.formConfig.forEach((field:any)=>{
      console.log({field});
      group[field.name] = [''];
    })
    this.form = this.fb.group(group)

  }

  submitForm(){
    console.log("Form values:",this.form.value)
  }

}
