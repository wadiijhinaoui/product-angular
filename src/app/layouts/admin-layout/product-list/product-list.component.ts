import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { ProductModel } from './product-list.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public formValue!: FormGroup;
  productModelObj: ProductModel = new ProductModel();
  productData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  msg: string = "";
  url: any;

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      productCode: ['', Validators.required],
      productLibelle: ['', Validators.required],
      price: ['', Validators.required,],
      image: ['']
    });
    this.getAllProduct();
  }
  clickAddProduct() {

    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postProductDetails() {
    const formData = new FormData();

    formData.append('productCode', this.formValue.value.productCode);
    formData.append('productLibelle', this.formValue.value.productLibelle);
    formData.append('price', this.formValue.value.price);
    if (this.formValue.value.image) {

      formData.append('image', this.formValue.value.image);

    }

    this.productModelObj.productCode = this.formValue.value.productCode;
    this.productModelObj.productLibelle = this.formValue.value.productLibelle;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.image = this.formValue.value.image != null ? this.formValue.value.image.name : 'img.jpg';


    this.api.postProduct(this.productModelObj)
      .subscribe(res => {
        console.log(res);
        let ref = document.getElementById('cancel')
        ref?.click();
        if (res.image !== '' && res.image !== 'img.jpg') {

          const formData: FormData = new FormData();
          formData.append('file', this.formValue.value.image);
          this.api.postImg(formData).subscribe(result => {
            console.log(result);
          });
        }
        this.formValue.reset();
        this.getAllProduct();

      });


  }

  getAllProduct() {
    this.api.getProduct()
      .subscribe(res => {
        this.productData = res;
      })
  }
  deleteProduct(row: any) {
    this.api.deleteProduct(row.id)
      .subscribe(res => {
        this.getAllProduct();
      })
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.productModelObj.id = row.id;
    this.formValue.controls['productCode'].setValue(row.productCode)
    this.formValue.controls['productLibelle'].setValue(row.productLibelle)
    this.formValue.controls['price'].setValue(row.price)

  }
  updateProductDetails() {
    this.productModelObj.productCode = this.formValue.value.productCode;
    this.productModelObj.productLibelle = this.formValue.value.productLibelle;
    this.productModelObj.price = this.formValue.value.price;

    this.api.updateProduct(this.productModelObj, this.productModelObj.id)
      .subscribe(res => {

        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllProduct();

      })
  }





  selectFile(event: any) { //Angular 11, for stricter type
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\//) == null) {
      this.msg = "Only images are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
    }
    let file = event.target.files[0];
    console.log('file:', file.name);
    //this.formValue.get('product_img')!.setValue(file);
    this.formValue.patchValue({
      image: file
    })
  }


}

