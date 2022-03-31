import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  submitted = false; 
  
  
 // strPattern = "^[a-z]+$";
  constructor(private fb: FormBuilder, private products: ProductService) { }
  form = this.fb.group({
   // name: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-z]+$/)]],
   name: ['', [Validators.required]],
   brand: ['', [Validators.required]],
   model: ['', [Validators.required]],
   price: ['', [Validators.required]],
   quantity: ['', [Validators.required]],
    
  });
  ngOnInit(): void {
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
 afterSubmit(){
this.submitted = true;
if(this.form.invalid){
return;
}
//alert(JSON.stringify(this.form.value));
this.products.create(this.form.value).subscribe(() => {
  console.log(this.form.value)
  alert("Product has been saved!!!");
})

}


}
