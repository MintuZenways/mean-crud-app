import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   
  constructor(private activeRoute: ActivatedRoute, private products: ProductService, private router: Router) { }
  id: any;
  submitted:boolean = false;
  productData:any = [];
  product: any = {};

  afterSubmit(){
    //alert(JSON.stringify(this.productData));
    this.products.updateProduct(this.id, this.productData).subscribe(() =>{
      console.log("Update Successfully");
      alert("Updated Successfully");
      this.router.navigate(['/first']);
    })
  } 
  
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.products.getProduct(this.id).subscribe((res) =>{
    this.productData = res;
    
    console.log(this.productData);
    })
  }
  


}
